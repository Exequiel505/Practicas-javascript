// FUNCIONES FLECHA

// const saludar = nombre =>"hola como estas " + nombre ;

// console.log(saludar("marcos"));

// let persona = (nombre, edad) =>`hola ${nombre} como estas ? usted tiene ${edad} años` ;

// console.log(persona("Fernando", 45));

// // FUNCIONES COMUNES

// function holi (nombre, calle, edad){
//     console.log("holis " + nombre + " como estas ? Vos vivis en la calle " + calle + " y tenes " + edad + " años")
// };

// holi("Rodrigo", "Quilmes", 80);

// let numeros = [1, 2, 3, 4, 5];

// numeros [0]= 4;

// console.log(numeros);

// ejemplo

// function mostrarLista(arreglo){

//     if (arreglo.length === 0) {

//        return console.log("la lista esta vacia");

//     };

//     for (const item of arreglo) {

//         // console.log(item);
        
//     }
    
//     console.log(`la longitud de la lista es de ${arreglo.length}`)
// }

// const arreglo1 = [10, 20, 30, 40];
// const arreglo2 =[1000, 2];
// const arreglo3 =[];

// mostrarLista(arreglo1);
// mostrarLista(arreglo2);
// mostrarLista(arreglo3);

// CLASES

// class Humano {
//     constructor (nombre, apellido, edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }

//     saludar(){

//         console.log(`Hola ${this.nombre} ${this.apellido} tu tienes ${this.edad} años`)
//     }
//     static especie = "humano";

//     getEspecie(){

//         console.log(`la especie es ${Humano.especie}`)

//     }
// }

// const persona1 = new Humano ("Rodolfo", "Suarez", 44);

// persona1.saludar();

// persona1.getEspecie();

// class Contador {

//     constructor(nombre){

//         this.nombre = nombre;
//         this.contador = 0;
//     };

//     getResponsable(){
//         return this.nombre;
//     }

//     contar(){
//         this.contador++
//         Contador.contadorGlobal++
//     }

//     getCuentaIndividual(){
//         return this.contador;
//     }

//     getCuentaGlobal(){
//         return Contador.contadorGlobal
//     }

//     static contadorGlobal = 0;
    
// }

// const contador1 = new Contador ("marcelo")
// const contador2 = new Contador ("Marcela")
// const contador3 = new Contador ("Jorgelina")
// const contador4 = new Contador ("Mica")

// console.log(`Este contador es de ${contador1.getResponsable()}`)

// contador1.contar()
// contador1.contar()
// contador1.contar()
// contador1.contar()
// contador1.contar()

// console.log(`El contador 1 obtuvo un total de ${contador1.getCuentaIndividual()}`)

// console.log(`Este contador es de ${contador2.getResponsable()}`)

// contador2.contar()
// contador2.contar()
// contador2.contar()
// contador2.contar()

// console.log(`El contador 2 obtuvo un total de ${contador2.getCuentaIndividual()}`)

// console.log(`Este contador es de ${contador3.getResponsable()}`)

// contador3.contar()
// contador3.contar()

// console.log(`El contador 3 obtuvo un total de ${contador3.getCuentaIndividual()}`)

// console.log(`Este contador es de ${contador4.getResponsable()}`)

// contador4.contar()

// console.log(`El contador 4 obtuvo un total de ${contador4.getCuentaIndividual()}`)

// console.log(`El contador Global es de ${contador1.getCuentaGlobal()}`)

// console.log(`Contador global es ${Contador.contadorGlobal}`)

// OPERADOR DE POTENCIACION

// let exponencial = 10**10

// console.log(exponencial)

// INCLUDES

// let numeros = [10, 20, 50, 1000]

// let estaDiez = numeros.includes(1)

// if (estaDiez) {
    
//     console.log("Esta!")

// } else {

//     console.log("No esta :(")
    
// }

// PROMESAS

// let holaMundo = new Promise((resolve) => {

//     setTimeout(() =>{
//         resolve("Hola Mundo");
//     }, 1000);
    
// });

// let resolverPromesa = async() =>{

//     let resultado = await holaMundo;

//     console.log(resultado)

// }

// resolverPromesa();

// OBJETS

// let hombre = {

//     nombre:"Ivan",
//     edad:32,
//     id:3

// }

// let entries = Object.entries(hombre)
// let keys = Object.keys(hombre)
// let values = Object.values(hombre)

// console.log(entries)
// console.log(keys)
// console.log(values)

// REDUCE

// let numeros = [1000, 2000, 3000, 4000, 5000]

// let promedio = numeros.reduce((acumulador, valorActual, indice, array) => {
//     acumulador += valorActual
//     if (indice===array.length -1) {
//         return acumulador / array.length
//     }
//     return acumulador;
// }, 0)
// console.log(promedio)

// SPRED

// let persona0 = {
//     id:1
// }

// let personaNombre={

//     nombre:"Marcelo"
// }

// let masDatos ={
//     calle:"no tiene, le hace falta mas"
// }

// let todosLosDatos ={
//     ...persona0,
//     ...personaNombre,
//     ...masDatos
// }

// console.log("Los datos son: ", todosLosDatos);

// let numeros1 = [1,2,3,4,5]
// let numeros2= [6,7,8,9,10]
// numeros1.push(55)

// let numerosFusionados =[...numeros1,...numeros2]

// console.log(numerosFusionados)

// let sumaDeNumeros = (numero1, numero2, ...rest) =>{
//     if (!rest) {
//         return numero1+numero2
//     }
//     const suma = rest.reduce((acumulador, current)=> acumulador + current);
//     return suma + numero1 + numero2;
// }
// console.log(sumaDeNumeros(2,2,2,2,2,2,2,2))

// let saludo = "                 hola lucio          "
// console.log(saludo.trim())

// const arr = [[1,2],[3,2],[[[[[3,4]]]]]]

// let arrAplanado = arr.flat(100)

// console.log(arrAplanado)
// let saludoRequerido = require('./saludo')

// saludoRequerido.saludar()

// OPERADORES CORTOCIRCUITO ?? || &&
// ?? significa nullish y solo va a mostrar el segundo parametro en caso de que el primero sea undefined o null

// let nombre1=false
// let nombre2 ="fernando"

// console.log(nombre1 ?? nombre2)

// || operador OR solo va a mostrar el segundo paramentro en caso de que el primero de :null, undefined, false, 0 , "" y NaN

// let nombre1 =false
// let nombre2="alonso"

// console.log(nombre1 || nombre2)


// && operador AND muestra la primera expresion que sea falsy value - false, undefined, etc

// let nombre1 = false
// let nombre2 = "juan"
// console.log( nombre1 && nombre2)

// falsy values son : null, undefined, false, 0 , "" y NaN

// class Persona{
//     #nombre
//     constructor(nombre){
//         this.#nombre= nombre
//     }
//     getNombre(){
//         return this.#nombre
//     }
// }

// const persona1 = new Persona("juan");
// console.log(persona1.getNombre())










