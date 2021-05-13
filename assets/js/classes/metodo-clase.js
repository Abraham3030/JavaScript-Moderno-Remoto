
/*
 * Un metodo es una funcion que solo se ejecuta en la clase
 */

class Persona{
    
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }
    /**
     * Primer metodo quienSoy
     * hacemos referencia con this.propiedad para acceder a la propiedad de la clase
     * */ 
    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    /**
     * Segundo metodo miFrase
     * hemos referencia a un metodo propio de la clase con this.metodo
     * y accedemos a las propiedades de igual forma
     */
    miFrase(){
        this.quienSoy();
        console.log(`mi frase ${this.frase}`);
    }
}

const spiderman = new Persona('peter', 'spiderman', 'Tu amigable vecino');
const ironman = new Persona('tony', 'ironman', 'Yo soy Iron Man');
console.log(spiderman)
console.log(ironman)
// impersion de metodo por instancia generada
spiderman.quienSoy();
ironman.miFrase();