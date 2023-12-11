import {Router} from 'express';
import { productManager } from '../index.js';
const productsRouter = Router();

productsRouter.get('/', async(req, res) =>{

    try {

        const limit = req.query.limit;

        const products = await productManager.getProducts();

        if (limit) {

            const limitedProducts = products.slice(0, limit);

            return res.json(limitedProducts);
            
        };

        return res.json(products);

    } catch (error) {

        console.log(error);
        res.send ("Error al recibir los productos");
        
    };
});

productsRouter.get('/:pid', async (req, res) =>{

    try {

        const pid =req.params.pid;

        const products = await productManager.getProductsById(pid);

        res.json(products);
        
    } catch (error) {

        console.log(error);
        res.send (`Error al recibir los productos con id ${pid}`);
        
    };
});

productsRouter.post('/', async (req, res) => {

    try {

        const {title, description , price, thumbnail, code, stock, status = true, category} = req.body;

        const response = await productManager.addProduct({ title, description , price, thumbnail, code, stock, status, category})

        res.json(response);

    } catch (error) {

        console.log(error)
        res.send ("Error al agregar producto");

    };
});

productsRouter.put('/:pid', async (req, res) => {

    const pid = req.params.pid;

    try {

        const {title, description , price, thumbnail, code, stock, status = true, category} = req.body;

        const response = await productManager.updateProduct(pid, { title, description , price, thumbnail, code, stock, status, category});

        res.json (response);

    } catch (error) {

        console.log(error);
        res.send (`Error al editar productp con id ${pid}`);
        
    };
});

productsRouter.delete ('/:pid', async (req, res) =>{
    const pid = req.params.pid;

    try {

        await productManager.deleteProduct(pid)
        res.send ("Producto eliminado exitosamente")

    } catch (error) {
        
        console.log(error);
        res.send (`Error al elimar el producto con id ${pid}`);

    };
});

export { productsRouter };