/**
 * En otros lenguajes se puede usar sobrecarga de constructores pero
 * JavaScript no acepta constructores multiples (sobrecarga)
 * pero existe una forma de como realizarlo
 * creando metodos estaticos para crear instancias
 * de diferentes formas
 */

class Persona {

    /* Protip los metodos estaticos son muy utiles cuando 
       se hacen peticiones HttpGet a alguna instacia de la class*/

    // metodo estatico que retorna una nueva instancia de persona
    static porObjeto({nombre, apellido, pais}){
        // esto va retornar una nueva instancia de persona
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo(){
        console.log(`info: ${ this.nombre }, ${this.apellido }, ${this.pais }`);
    }
}

const nombre1   = 'Brenda',
      apellido1 = 'Valdez',
      pais1      = 'México';
// objeto abraham que va ser llamado por un constructor
const abraham = {
    nombre: 'Abraham',
    apellido: 'Montelongo',
    pais: 'México'
}

const persona1 = new Persona( nombre1, apellido1, pais1);
//const persona2 = new Persona( abraham.nombre, abraham.apellido, abraham.pais);
// para no realizar el codigo de la linea anterior vamos a usar desestructuracion de objetos
// con un metodo estatico
const persona2 = Persona.porObjeto( abraham );

persona1.getInfo();
persona2.getInfo();