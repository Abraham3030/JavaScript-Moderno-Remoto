/**
 * Las clases en JavaScript se crearon para simular una programacion orientada a objetos
 * Pero esto viene de el ECMA 5, pero puede haber codigo antaño y tendras que lidiar con el
 */

const ab = {
    nombre: 'Abraham',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

//ab.imprimir();
//pedro.imprimir();

// Funcion con UpperCamelCase para indicar que es una, esto se debe crear con una palabra new
// Esta es un llamado a un constructor 
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }

}

// Se crea una instancia de persona con la palabra reservada new
const maria = new Persona('Maria', 18);
const melisa = new Persona('Melisa', 18);
maria.imprimir();
melisa.imprimir();