import {promises as fs} from "fs";

class ProductManager{

    #products;
    static #id = 0;

    constructor(){
        this.patch = "./carrito.txt"
        this.#products = []

    };

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        if ( this.campoObligatorio (title, description, price, thumbnail, code, stock) && this.noDuplicado ( code ) ) {
            
            ProductManager.#id++

            const newProduct = {

                title: title,

                description: description,

                price: price,

                thumbnail: thumbnail,

                code: code,

                stock: stock,

                id: ProductManager.#id,

            };
           
            this.#products.push(newProduct);

            await fs.writeFile(this.patch, JSON.stringify(this.#products));

        };
    };
    
    campoObligatorio (title, description, price, thumbnail, code, stock){

        if(!title || !description || !price || !thumbnail || !code || !stock){

            console.error(`Usted no ha completado todos los campos`);

            return false;

        } else{

            return true;

        };
    };

    noDuplicado(code){

        if (this.#products.find((product) => product.code === code ) !== undefined){

            console.error(`Ha introducido el mismo codigo de un producto seleccionado previamente`);

            return false;

        } else {

            return true;
        };
    };

    readProducts = async()=>{

        let lectura = await fs.readFile(this.patch, "utf-8");

        return (JSON.parse(lectura));
    };
    getProducts = async () => {
        
        await this.readProducts();

        
    };

    getProductsById = async (id)  => {

        let respuesta3 = await this.readProducts();

        if (!respuesta3.find((product) => product.id === id )) {

            console.log("No se ha encontrado su producto");
            
        } else {

            console.log(respuesta3.find((product) => product.id === id ));
            
        };  

    };

    deleteProductById = async (id) =>{

        let respuesta3 = await this.readProducts();

        let productFilter = respuesta3.filter(product => product.id != id);

        await fs.writeFile(this.patch, JSON.stringify(productFilter));

        console.log("producto eliminado");
    };
    
    updateProducts = async (id, ...product) =>{

        await this.deleteProductById(id);

        let productold = await this.readProducts();

        let prodcutsMod = [ {...product, id}, ...productold]

        await fs.writeFile(this.patch, JSON.stringify(prodcutsMod));

    };

};
 
let carrito = new ProductManager();


carrito.addProduct("papa","tuberculo",100,"?",1,15);
carrito.addProduct("zanahoria","tuberculo",200,"?",2,15);
carrito.addProduct("cebolla","tuberculo",300,"?",3,15);
carrito.addProduct("calabaza","tuberculo",400,"?",4,15)


// carrito.getProductsById(4)

carrito.deleteProductById(1)

// carrito.updateProducts({

//     title: 'hola cambie',
//     description: 'tuberculo',
//     price: 40,
//     thumbnail: '?',
//     code: 3,
//     stock: 15,
//     id: 3

// })









