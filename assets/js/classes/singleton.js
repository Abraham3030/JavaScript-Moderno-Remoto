/**
 * informacion de manera global con singleton
 * simpre se retorna la misma instancia de la clase
 * y es bastante util cuando se comparte informacion
 * o de una base de datos 
 * Singleton sirve para ahorrar memoria y siempre
 * va apuntar a la misma instancia
 */

class Singlenton {
    // campos opcionales
    static instancia; // undefined
    nombre = '';

    constructor( nombre = ''){
        
        //const a = undefined;
        //console.log(a); // undefined
        //console.log(!a); // true
        //console.log(!!a); // false
        // ejemplo de !!Singleton.instancia dara false
        if ( !!Singlenton.instancia ){
            // Si ya existe la instacia la devolvera
            // y se corta la ejecucion del constructor
            return Singlenton.instancia;

        }
        // Sino existe la asignara y devolvera la instancia
        Singlenton.instancia = this;
        this.nombre = nombre;
        
        // Este return retorna todos las instancias
        // Pero la idea de Singleton es que siempre retorne la misma instancia
        //return this;

    }
}

const instancia1 = new Singlenton('Ironman');
const instancia2 = new Singlenton('Spiderman');
const instancia3 = new Singlenton('BlackPanter');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre}`);
console.log(`Nombre en la instancia1 es: ${ instancia2.nombre}`);
console.log(`Nombre en la instancia1 es: ${ instancia3.nombre}`);