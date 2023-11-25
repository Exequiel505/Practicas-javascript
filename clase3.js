// const sumar = ( numero1, numero2 ) => numero1 + numero2;
// const restar = (numero1, numero2) => numero1 - numero2;
// const multiplicar = (numero1, numero2) => numero1 * numero2;
// const dividir = (numero1, numero2) => numero1 / numero2;

// let operacion = (numero1,numero2,callback) =>{

//     const resultado = callback(numero1,numero2)
//     return resultado

// }

// let suma = operacion (1,2,sumar)

// console.log(suma)

// const dividir = (numero1,numero2) =>{
//     return new Promise((resolve, reject) => {
//         if (numero2 === 0) {
//             reject("no se puede dividir por 0")
//         } else {
//             resolve(numero1/numero2)
//         }
//     })
// }

// const realizarOperacion = async () =>{
//     try {
        
//     const resultado1 = await dividir(4,2)

//     console.log(resultado1)

//     const resultado2 = await dividir(4,0)

//     console.log(resultado2)
        
//     } catch (error) {

//         console.error(error)
     
//     }
//     finally{
//         console.log("la promesa termino")
//     }
// }

// console.log(realizarOperacion)

// let suma = (numero1, numero2) => {
//     return new Promise((resolve, reject) => {
//         if (numero1 === 0 || numero2 === 0) {
//             reject("operacion innecesaria")
//         }
//         let sumatoria = numero1 + numero2
//         if (sumatoria < 0) {
//             reject("la calculadora solo puede dar valores positivos")
//         }
//         resolve(sumatoria)
     
//     })
// }

// let resta = (numero1,numero2) =>{
//     return new Promise ((resolve,reject)=>{
//         if (numero1===0||numero2===0){
//             reject("operacion invalida")
//         }
//         let operacionResta = numero1-numero2
//         if (operacionResta < 0) {
//             reject("solo puede haber valores positivos")
//         }
//         resolve (operacionResta)
//     })
// }

// let multiplicar = (numero1, numero2) =>{
//     return new Promise((resolve,reject)=>{
//         if(numero1 < 0 || numero2 < 0){
//             reject("ningun factor puede ser 0")
//         }
//         let operacionMultiplicar = numero1*numero2
//         if(operacionMultiplicar<=0){
//             reject("no puede haber valor negativo")
//         }
//         resolve(operacionMultiplicar)
//     })
// }

// let operaciones = async () => {
//     try {
//         let resultadoSuma = await suma(1,2)
//         console.log(resultadoSuma)
//         let incorrecto = await suma (0,2)
//         console.log(incorrecto)
    
// }   catch (error) {
//     console.error(error)
// }
// try {
//     let resultadoResta = await resta(2,1)
//     console.log(resultadoResta)
//     let incorrectoResta = await resta (1,2)
//     console.log(incorrectoResta)
    
// } catch (error) {
//     console.error(error)
// }
// try{
//     let resultadoMultiplicacion = await multiplicar (2,2)
//     console.log(resultadoMultiplicacion)
//     let incorrectoMultiplicar = await multiplicar (0,2)
//     console.log (incorrectoMultiplicar)

// }catch(error){
//     console.error(error)
// }
// }
  
// operaciones()

// const fs = require ('fs')

// const fecha = new Date()

// fs.writeFile('./hora.txt', fecha.toLocaleString(),'utf-8', (error)=>{
//     if (error) {
//         return console.error("a casa")
//     }
//     fs.readFile('./hora.txt','utf-8',(error,data)=>{
//         if(error){
//             return console.error(error)
//         }
//         console.log(data)
//     })
// })

const fs = require ('fs')

const leerYEscrbibir = async () =>{
    try{
        await fs.promises.writeFile('./texto.txt' ,'Holis' ,'utf-8')
        let contenido = await fs.promises.readFile('./texto.txt', 'utf-8')
        console.log(contenido)
        await fs.promises.appendFile('./texto.txt', 'holis de nuevo', 'utf-8')
        contenido = await fs.promises.readFile('./texto.txt', 'utf-8')
        console.log(contenido)
        await fs.promises.unlink('./texto.txt')

    }catch(error){
        console.error("no se pudo leer o escribir el archivo")
    }
}
leerYEscrbibir();

