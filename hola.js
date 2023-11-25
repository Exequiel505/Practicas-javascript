// const fs = require('fs');

// class ProductManager {
//   constructor(filePath) {
//     this.path = filePath;
//   }

//   async addProduct(product) {
//     try {
//       const products = await this.getAllProductsFromFile();
//       const newProduct = {
//         ...product,
//         id: products.length > 0 ? Math.max(...products.map(item => item.id)) + 1 : 1
//       };
//       products.push(newProduct);
//       await this.saveProductsToFile(products);
//       return newProduct;
//     } catch (error) {
//       throw new Error('Error al agregar el producto: ', error);
//     }
//   }

//   async getProducts() {
//     try {
//       return await this.getAllProductsFromFile();
//     } catch (error) {
//       throw new Error('Error al obtener los productos: ', error);
//     }
//   }

//   async getProductById(productId) {
//     try {
//       const products = await this.getAllProductsFromFile();
//       return products.find(product => product.id === productId);
//     } catch (error) {
//       throw new Error('Error al obtener el producto por ID: ', error);
//     }
//   }

//   async updateProduct(productId, updatedFields) {
//     try {
//       const products = await this.getAllProductsFromFile();
//       const productIndex = products.findIndex(product => product.id === productId);
//       if (productIndex !== -1) {
//         products[productIndex] = { ...products[productIndex], ...updatedFields };
//         await this.saveProductsToFile(products);
//         return products[productIndex];
//       }
//       return null; // Producto no encontrado
//     } catch (error) {
//       throw new Error('Error al actualizar el producto: ', error);
//     }
//   }

//   async deleteProduct(productId) {
//     try {
//       let products = await this.getAllProductsFromFile();
//       const updatedProducts = products.filter(product => product.id !== productId);
//       await this.saveProductsToFile(updatedProducts);
//       return true;
//     } catch (error) {
//       throw new Error('Error al eliminar el producto: ', error);
//     }
//   }

//   async getAllProductsFromFile() {
//     try {
//       const data = await fs.promises.readFile(this.path, 'utf8');
//       return JSON.parse(data);
//     } catch (error) {
//       // Si hay un error al leer el archivo, retornamos un arreglo vacío.
//       return [];
//     }
//   }

//   async saveProductsToFile(products) {
//     try {
//       await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
//     } catch (error) {
//       throw new Error('Error al guardar los productos en el archivo: ', error);
//     }
//   }
// }

// module.exports = ProductManager;



const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
  }

  async addProduct(product) {

    try {

      const products = await this.getAllProductsFromFile();

      const newProduct = {

        id: products.length > 0 ? Math.max(...products.map(item => item.id)) + 1 : 1,

        ...product,

      };
      products.push(newProduct);

      await this.saveProductsToFile(products);

      return newProduct;

    } catch (error) {

      throw new Error('Error al agregar el producto: ', error);

    }
  }

  async getProducts() {

    try {

      return await this.getAllProductsFromFile();

    } catch (error) {

      throw new Error('Error al obtener los productos: ', error);

    }
  }

  async getProductById(productId) {

    try {

      const products = await this.getAllProductsFromFile();

      return products.find(product => product.id === productId);

    } catch (error) {

      throw new Error('Error al obtener el producto por ID: ', error);
    }
  }

  async updateProduct(productId, updatedFields) {

    try {
      const products = await this.getAllProductsFromFile();

      const productIndex = products.findIndex(product => product.id === productId);

      if (productIndex !== -1) {

        products[productIndex] = { ...products[productIndex], ...updatedFields };

        await this.saveProductsToFile(products);

        return products[productIndex];
      }
      return null;
       // Producto no encontrado
    } catch (error) {

      throw new Error('Error al actualizar el producto: ', error);

    }
  }

  async deleteProduct(productId) {

    try {

      let products = await this.getAllProductsFromFile();

      const updatedProducts = products.filter(product => product.id !== productId);

      await this.saveProductsToFile(updatedProducts);

      return true;

    } 
    catch (error) {

      throw new Error('Error al eliminar el producto: ', error);

    }
  }

  async getAllProductsFromFile() {

    try {

      const data = await fs.promises.readFile(this.path, 'utf8');

      return JSON.parse(data);

    } catch (error) {

      // Si hay un error al leer el archivo, retornamos un arreglo vacío.
      return [];
    }
  }

  async saveProductsToFile(products) {

    try {

      await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));

    } catch (error) {

      throw new Error('Error al guardar los productos en el archivo: ', error);
    }
  }
}

// Integrando ProductManager con tu clase existente
class CustomProductManager extends ProductManager {

  constructor(filePath) {

    super(filePath);
    
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    super.addProduct(product);
  }

  getProducts() {
    return super.getProducts();
  }

  getProductById(id) {
    return super.getProductById(id);
  }

  // ... otros métodos se mantienen igual ...

  // Puedes mantener los métodos existentes aquí o reemplazarlos según sea necesario.
}

let carrito = new CustomProductManager('./ejemplo.json');

carrito.addProduct('papa', 'tuberculo', 200, '?', 1, 15);
carrito.addProduct('zanahoria', 'tuberculo', 100, '?', 2, 15);
carrito.addProduct('cebolla', 'tuberculo', 50, '?', 3, 15);
carrito.addProduct('calabaza', 'tuberculo', 25, '?', 4, 15);

// También puedes seguir utilizando los métodos existentes si los necesitas.
console.log(carrito.getProductById(2));


