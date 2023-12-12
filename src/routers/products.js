import { Router } from "express"
import ProductManager from "../productManager.js";
import { accessSync } from "fs";

const router = Router()

const productManager = new ProductManager

router.get("/",async  (req, res) => {
    const { limit } =  req.query;
    let productos = await productManager.getProducts(limit)
    return res.json({productos})
});

router.get("/:pid", (req,res) =>{

    const {pid} = req.params;
    const p = new ProductManager();
    return res.json({producto: p.getProductById(Number(pid))})
})

router.post("/", (req,res)=>{
    const {title, description, price, thumbnail, code, stock, category, status} = req.body;
    const p = new ProductManager
    const result = p.addProduct(title, description, price, thumbnail, code, stock, category, status);
    return res.json({result});
});

export default router;