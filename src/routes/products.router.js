import { Router } from "express";

const productsRouter = Router()
import { productManager } from "../index.js";

export {productsRouter}

productsRouter.get("/", async (req,res)=>{
    try {
        const {limit} =req.query
        const products = await productManager.getProducts()
        if (limit) {
            const limitedProducts = products.slice (0,limit)
            return res.json(limitedProducts)
        }
        return res.json(products)
    } catch (error) {
        console.log("error")
        res.send("error al obentener los productos")
    }
})

productsRouter.get("/:pid", async (req,res)=>{
    const {pid} = req.params
    try {
        const product = await productManager.getProductById(pid)
        if (product) {
            res.json(product)
        } else {
            res.status(404).send(`Producto con id ${pid} no encontrado`)
        }
    } catch (error) {
        console.log("error")
        res.send(`error al intentar obtener productro con id ${pid}`) 
    }
})
productsRouter.post("/", async(req,res)=>{
    try {
        const staticData = {
            title: "Producto de Prueba",
            description: "Descripción de prueba",
            price : 200,
            thumbnail:"holis",
            code:"1234",
            stock:2,
            status:"false",
            category:"holis"
        };
        console.log(staticData)
        // const{title, description, price, thumbnail, code, stock, status, category} = req.body
        const response = await productManager.addProduct(staticData)
        res.json(response)
    } catch (error) {
        console.log("error")
        res.send("error al agregar producto") 
    }
})
productsRouter.put("/:pid",async(req,res)=>{
    const {pid} = req.params
    try {
        const{title, description, price, thumbnail, code, stock, status, category} = req.body
        const response = await productManager.updateProduct(id,{title, description, price, thumbnail, code, stock, status, category})
        res.json(response)
    } catch (error) {
        console.log("error") 
        res.send(`error al intentar editar productro con id ${pid}`)
    }
}
)

productsRouter.delete("/:pid",async(req,res)=>{
    const {pid} = req.params
    try {
        await productManager.deleteProduct(id)
        res.send("producto eliminado")
    } catch (error) {
        console.log("error") 
        res.send(`error al intentar borrar productro con id ${pid}`)
    }
})




