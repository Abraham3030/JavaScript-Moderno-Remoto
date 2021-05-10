
function crearPersona(nombre, apellido){
    return { nombre, apellido };
}

console.log(crearPersona('José', 'Abraham'));

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});
/* Se puede hacer la invocacion de una funcion flecha de 2 maneras distintas*/
// 1 ejecutando directamente a funcion 
console.log(crearPersona2('Abraham', 'Montelongo'));

// 2 almacenando la funcion en una nueva variable y luego imprimir la nueva variable
const crearPersona3 = (nombre, apellido) => ({nombre, apellido});
const persona = crearPersona3('José', 'Campos');
console.log(persona);


/* Imprimir los argumentos de una funcion flecha con el operador ... 
   como sabemos arguments es una propiedad de window, que las arrow functions
   no tiene solo las function tienen*/
function imprimeArguemntos(){
    console.log(arguments);
}

imprimeArguemntos('Abraham', 30, false);

/* Ahora con arrow fucntion */
/*const imprimeArguemntos2 = ()=>{
    console.log(arguments);
}*/
//imprimeArguemntos2('Abraham', 30, false);
//va dar un error por que arguments no es propio de las funciones flecha

/* Simular arguments con arg(es solo una variable aqui lo 
    importante es el operador ...) en arrow function y no puede ir
    nada despues de la referencia, pero antes si puede ir */
const imprimeArguemntos2 = ( ...arg )=>{
    console.log(arg);
}
imprimeArguemntos2('Abraham', 30, false);

/* ejemplo y debe llevar {} para que se ejecute como un array*/
const imprimeArguemntos3 = ( nombre, ...arg )=>{
    console.log({nombre, arg});
}
imprimeArguemntos3('Abraham', 30, false);

/* crear un objeto con las referencias que me manda la invocacion  */
const imprimeArguemntos4 = ( nombre, ...arg )=>{
    //console.log({nombre, arg});
    //la funcion debe retornar para poder crear un objeto
    return arg;
}
const [ edad, casado] = imprimeArguemntos4('Abraham', 30, false);
console.log({edad, casado});

/* utilizando la funcion crearPersona3 vamos a imprimir solo el apellido
   generando una nueva variable, asignando una propiedad  */

const {apellido: nuevoApellido} = crearPersona3('Abraham', 'Montelongo');
console.log({nuevoApellido});

/* Desestructuracion de objetos */
//ejemplo

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    estaVivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

/* Para poder acceder a cada una de las propiedades del objeto
   sin la necesidad de de utilizar el objeto.propiedad 
   existe la desestructuracion, que guarda las propiedades 
   en variables independientes*/
/*const imprimePropiedades = ( tony ) => {
    console.log('nombre: ', tony.nombre);
    console.log('codeName: ',tony.codeName);
    console.log('vivo:',tony.estaVivo);
    console.log('trajes: ',tony.trajes);
}
imprimePropiedades(tony);*/
/* Para evitar tener que escribir todo ese codigo podemos desestructuras
   ya que el código anterior es una mala practica*/

const imprimePropiedades = ({nombre, codeName, estaVivo, edad, trajes}) =>{
    console.log({nombre}); 
    console.log(codeName);
    console.log(estaVivo);
    console.log(edad);
    console.log(trajes);
}
imprimePropiedades(tony);

