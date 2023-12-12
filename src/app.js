import express from "express";
import ProductManager from "./productManager.js";

const app = express ();

const PORT = 8080

app.get("/products", async (req, res) =>{

    const {limit} = req.query;

    const p = new ProductManager();

    return res.json({productos: await p.getProducts(limit)})
    
});

app.get("/products/:pid", async (req, res) =>{

    const { pid } = req.params;

    const p = new ProductManager();

    return res.json({producto: await p.getProductsById(Number(pid))})
});

app.listen(PORT, () => {
    console.log(`Corriendo servidor en el puerto ${PORT}`)
})