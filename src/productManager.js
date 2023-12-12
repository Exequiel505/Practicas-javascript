import {promises as fs} from 'fs';


class ProductManager{

    #products;
    #path
    static idProducto = 0;

    constructor(){
        
        this.#path ='./src/data/products.json'
        this.#products = []; 
        this.#leerProductosInFile();

    };

    #asignarIdProducto() {
        let id = 1;
        if (this.#products.length !== 0 && this.#products[this.#products.length - 1]?.id !== undefined) {
          id = this.#products[this.#products.length - 1].id + 1;
        }
        return id;
      }
            
    async #leerProductosInFile() {
        try {
          await fs.access(this.#path);
          const data = await fs.readFile(this.#path, 'utf-8');
          this.#products = JSON.parse(data) || [];
        } catch (error) {
          console.log(`Ocurrió un error al leer el archivo de productos: ${error}`);
          this.#products = [];
        }
      }
      

    #guardarArchivo (){

        try {

            fs.writeFile(this.#path, JSON.stringify(this.#products))

        } catch (error) {

            console.log (`ocurrio un error al momento de guardar el archivo de productos, ${error}`)

        }
    }

    addProduct (title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) 

            return "todos los parametros son requeridos [title, description, price, thumbnail, code, stock]"
            
        const codeRepetido = this.#products.some(p => p.code == code)

        if(codeRepetido)
     
            return `El codigo ${code} ya se encuentra registrado en otro producto`;  

        ProductManager.idProducto = ProductManager.idProducto + 1;

        const id = this.#asignarIdProducto();

        const nuevoProducto = {

            id,
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock
        };
        this.#products.push(nuevoProducto);
        this.#guardarArchivo();
        return "producto agregado exitosamente";
        
    };

    getProducts (){

        return this.#products

    };

    getProductById (id){

        const producto = this.#products.find (p => p.id == id)

        if (producto) {

            return producto;
            
        } else {

            return `No se encontro el producto con id ${id}`
            
        };

    };

    updateProductById(id, objetUpdate) {

        let msg = `El producto con id ${id} no existe`

        const index = this.#products.findIndex(p => p.id === id)

        if (index !== -1) {

            const {id, ...rest}= objetUpdate
            this.#products[index] ={...this.#products[index],...rest};
            this.#guardarArchivo()
            msg= `Producto actualizado`
            
        }

        return msg;
    };


    deleteProduct(id) {
        const productId = parseInt(id); // Convertir a tipo compatible si es necesario
    
        const index = this.#products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.#products.splice(index, 1);
            this.#guardarArchivo();
            return 'Producto eliminado';
        } else {
            return `No se encontró el producto con id ${id}`;
        }
    }
    
      
    
};

const producto = new ProductManager();

// console.log(producto.addProduct("lapto", "lenovo", 5000,"saf", "sgh","20"))

// console.log(producto.addProduct("lapto2", "lenovo", 5000,"saf", "sg","20"))

console.log(producto.deleteProduct(2))


