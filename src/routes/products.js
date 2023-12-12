import {Router} from 'express';
import { ProductManager } from '../productManager.js';
const router = Router ();

router.get("/", (req, res) =>{

    const {limit} = req.query;

    const p = new ProductManager();

    return res.json({productos: p.getProducts(limit)})
    
});

router.get("/:pid", (req, res) =>{

    const { pid } = req.params;

    const p = new ProductManager();

    return res.json({producto: p.getProductsById(Number(pid))})
});

router.post('/', (req, res) => {
    const {title, description, price, thumbnails, code, stock, category, status} = req.body
    return res.json({})
})

export default router;