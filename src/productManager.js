
import fs from "fs";

class ProductManager{
    
    #products;
    #path;
    

    constructor(){

        this.#path = './data/productos.json';
        if (!fs.existsSync('./data')) {
            fs.mkdirSync('./data');
        }
        if (!fs.existsSync(this.#path)) {
            fs.writeFileSync(this.#path, '[]');
        }
        this.#products = this.#leerProductosinFile();
        console.log("Productos al inicializar:", this.#products);
    }
    
    
    #asignarIdProduct(){

        let id = 1;
        if (this.#products.length !== 0) {
            id = this.#products[this.#products.length-1].id + 1
        }
        return id;
    }

    #leerProductosinFile(){

        try {

            if (fs.existsSync(this.#path)) {
                const data = fs.readFileSync(this.#path, "utf-8")
                return JSON.parse(data)
            }
            return [];

        } catch (error) {
            console.log(`ocurrio un error al momento de leer el archivo de productos, ${error}`)
            return [];
        }
    }

    #guardarArchivo(){
        try {
            fs.writeFileSync(this.#path, JSON.stringify(this.#products))
        } catch (error) {
            console.log(`ocurrio un error al momento de guardar el archivo de productos, ${error}`)
        }
    }

    addProduct(title, description, price, thumbnails = [], code, stock, category, status = true ) {
        
        if (!title || !description || !price || !code || !stock || !category ) {
            return 'Todos los parámetros son requeridos[title, description, price, code, stock]';
        }

        const nuevoProducto = {
            id: this.#asignarIdProduct(),
            title: title,
            description: description,
            price: price,
            thumbnails: [],
            code: code,
            stock: stock,
            category: category,
            status: status
        };
    
        this.#products.push(nuevoProducto)

        this.#guardarArchivo();

        return `Producto agregado exitosamente`;
    }

    readProducts = () => {
        try {
            const data = fs.readFileSync(this.#path, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            console.log(`Ocurrió un error al leer el archivo de productos: ${error}`);
            return [];
        }
    };
    
    getProducts = async (limit = 0) => {

        limit = Number (limit);

        if(limit > 0){

            return await this.#products.slice(0,limit)

        }

        return await this.readProducts();
        
    };

    getProductById(id){

        const producto = this.#products.find(p => p.id == id)

        if (producto) {

            return (producto);

        } else {
            return (`Not foun del producto con id ${id}`)
        }
    }

    updateProduct(id, obejetUpdate){

        let msg= `el producto con id ${id} no existe`

        const index = this.#products.findIndex(p => p.id === id)

        if (index !== -1) {

            const{id, ...rest} = obejetUpdate;

            this.#products[index] = {...this.#products[index],... rest}
            this.#guardarArchivo();
            msg = "producto actualizado"
        }
        return msg;
    }
    
    deleteProduct(id) {

    let msg = `El producto con ID ${id} no existe`;

    const index = this.#products.findIndex(p => p.id === id);

    if (index !== -1) {

        this.#products.splice(index, 1);
        this.#guardarArchivo(); 
        msg = "Producto eliminado exitosamente";
    }
    return msg;
}

}



// const manager = new ProductManager();


// // manager.addProduct(
// //   'Nuevo producto',
// //   'Descripción del nuevo producto',
// //   50.99,
// //   'https://ruta-de-la-imagen.com',
// //   'NP001',
// //   15
// // );


// const productos = manager.getProducts();

// console.log(productos);

export default ProductManager;