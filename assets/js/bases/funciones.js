
/* Diferencia entre funcion y metodo
   fucion se ejecuta de manera global
   metodo es de manera local  */

/* funcion tradicional o declarada*/
function saludar(referencia){
    console.log('Hola ' + referencia);
}

/* funcion expresada o aninima */
const saludar2 = function(referencia){
    console.log('Hola ' + referencia);
}

/* funcion flecha o arrow function o lambda fucntions y es anonima*/
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
/* funcion flecha con referencia */
const saludarFlecha2 = (referencia) => {
    console.log('Hola '+ referencia);
}

/* Invocacion de una funcion*/

saludar('Abraham');
saludar2('Abraham');
saludarFlecha();
saludarFlecha2('José');

/* Por eso no es conveniente usar la funcion tradicional por 
   la propiedad arguments, aun que sea mas de una referencia, puede 
   acceder a lo que le mandas */
function saludarArgumentos(referencia){
    console.log(arguments);
}

saludarArgumentos('Abraham', 30, true, 'México');

/* Retorno de una funcion utilizando el ejemplo anterior vamos a retornar 1 
   aunque le mandemos por referencia diferentes valores*/
function saludarArgumentos2(referencia){
    // retorna 1 porque asi se designo el return 1;
    return 1;
    // Algo que va despues de un return jamas se va a ejecutar
}

const retornoDesaludarArgumentos2 = saludarArgumentos2('Abraham', 30, true, 'México');
console.log(retornoDesaludarArgumentos2);

/* Ejemplo de una funcion que sume dos numeros */
function sumar(a,b){
    return a+b;
}
console.log(sumar(1,2));
/* cambio de forma de funcion sumar a una arrow fuction sumar */
const sumar2 = (a,b) =>{
    return a+b;
}
console.log(sumar2(3,3));
/* cambio de forma de funcion sumar a una arrow fuction sumar 
   simplificada solo si tiene una instruccion de retorno*/
const sumar3 = (a,b) => a+b;

console.log(sumar3(4,4));

/* Ejemplo de una funcion que de un numero aleatorio */

function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

/* Ejercicio transformar la funcion aterior a una fucnion flecha sin llaves {} */

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());