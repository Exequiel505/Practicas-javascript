import express from "express";
import ProductManager from "./components/ProductManager.js";

const app = express ();
app.use(express.urlencoded({ extended : true }));

let carrito = new ProductManager();
const readProducts = carrito.readProducts();

app.get("/products",async (req, res) =>{

    res.send(await readProducts)

});

const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log(`Express por Local Host ${server.address().port}`)
});
server.on("error", (error) => console.log (`Error del servidor ${error}`))