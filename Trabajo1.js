class productManager{

    #products
    static #id = 0

    constructor(){

       this.#products = []

    };

    addProduct(title, description, price, thumbnail, code, stock){

        if (this.campoObligatorio(title, description, price, thumbnail, code, stock) && this.noDuplicado(code)){

            const idGen = productManager.#id++

            const newProduct = {

                id: idGen,

                title: title,

                description: description,

                price: price,

                thumbnail: thumbnail,

                code: code,

                stock: stock,

            }
           
            this.#products.push(newProduct);
           
        }
    };
    
    campoObligatorio (title, description, price, thumbnail, code, stock){

        if(!title || !description || !price || !thumbnail || !code || !stock){

            console.error(`Usted no ha completado todos los campos`)

            return false;

        } else{

            return true;

        };
    }

    noDuplicado(code){

        if (this.#products.find((product) => product.code === code ) !== undefined){

            console.error(`Ha introducido el mismo codigo de un producto seleccionado previamente`)

            return false;

        } else {

            return true
        }
    }

    getProducts(){

        return this.#products

    };

    getProductsById(id){

        let product = this.#products.find((product) => product.id === id );
        
        return product ? product : "No se ha encontrado el producto deseado"

    };

   

    // generadorId(){

    //     let id = 0;
    //     if (this.#products.length === 0) {

    //         id = 1;
            
    //     } else {

    //         id = this.#products[this.#products.length - 1].id + 1;
            
    //     }

    //     return id;

    // }

};

let carrito = new productManager();

carrito.addProduct("papa","tuberculo",200,"?",1,15)
carrito.addProduct("zanahoria","tuberculo",100,"?",2,15)
carrito.addProduct("cebolla","tuberculo",50,"?",3,15)
carrito.addProduct("calabaza","tuberculo",25,"?",4,15)

// mismo producto seleccionado
carrito.addProduct("papa","tuberculo",200,"?",1,15)

// no completar todos los campos
carrito.addProduct("zanahoria", "tuberculo",112,"?",15)


console.log(carrito.getProductsById(4))