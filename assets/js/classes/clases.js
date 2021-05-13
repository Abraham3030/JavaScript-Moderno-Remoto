

// Clases son similares a las clases de java pero tienen sus similitudes

/**
 * Ejemplo 1
 * estructura basica de una clase
 * palabra reervada class y UpperCamelCase 
 * para el nombre de la clase
 * class Persona{
 * }
 * 
 * constructor(inicializacion de propiedades){ // metodo que se va ejcutar autamoticamente
 *                // al ejecutar una nueva instancia de la clase
 *                // el constructor es el unico metodo que va devolver 
 *                // una instancia del objeto y no retorna undefined
 *   nombre = ''; // porpiedades
 *   codigo = '';
 *   frase = '';
 * }
 * 
 * cuando se ejecuta esta linea de codigo se esta realizando una instancia
 * const spiderman = new Persona('peter', 'spiderman', 'Tu amigable vecino'); // intancia de la clase persona con valores
 * const ironman = new Persona('tony', 'ironman', 'Yo soy Iron Man');
 * console.log(spiderman) // retorna el obejto Persona{}
 * console.log(ironman)
 * console.log(spiderman)  /
 * y el objeto __proto__: Object que es su descendencia
 * 
 *  */ 

class Persona{
    
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }
}

const spiderman = new Persona('peter', 'spiderman', 'Tu amigable vecino');
const ironman = new Persona('tony', 'ironman', 'Yo soy Iron Man');
console.log(spiderman)
console.log(ironman)