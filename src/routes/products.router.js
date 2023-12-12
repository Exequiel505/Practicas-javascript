import { Router } from "express";
import { productManager } from "../index.js";
const productsRouter = Router()

productsRouter.get("/", async (req,res)=>{
    try {
        const {limit} =req.query
        const products = productManager.getProducts()
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
        const products = productManager.getProductById(pid)
        res.json(products)
    } catch (error) {
        console.log("error")
        res.send(`error al intentar obtener productro con id ${pid}`) 
    }
})
productsRouter.post("/", async(req,res)=>{
    try {
        const{title, description, price, thumbnail, code, stock, status, category} = req.body
        const response = await productManager.addProduct({title, description, price, thumbnail, code, stock, status, category})
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




export {productsRouter}