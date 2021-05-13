
/**
 * Sets y Gets sirven para controlar el acceso a las propiedades
 * 
 */

class Persona{
    //propiedades
    nombre = '';
    codigo = '';
    frase = '';
    _comida = '';
    // constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }
    // sets y gets
    // set solo recibe un argumento
    // no pueden tener es mismo nombre que su argumento  
    // por eso se utiliza this._propiedad = referencia por convencion
    // y no se trabaja como funcion o metodo aunque se declara de esta manera
    // sino como propiedad
    set setComidaFavorita( comida  ){
        this._comida = comida.toUpperCase();
    }
    //get retorna la propiedad del set
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this._comida}`;
    }

    // metodos
    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(` ${this.frase}`);
    }
}
// instancia
const spiderman = new Persona('peter', 'spiderman', 'Tu amigable vecino');
const ironman = new Persona('tony', 'ironman', 'Yo soy Iron Man');
// impersion de metodo por instancia generada
spiderman.quienSoy();
//ironman.miFrase();
// set
// cuando se imprime el set aparece como una propiedad,
// pero en el prototype aparece como set
spiderman.setComidaFavorita = 'el pastel de cereza de la tía May';
// get 
// imprimimos el get para saber que si retorna la propiedad
console.log(spiderman.getComidaFavorita); 
console.log(spiderman)
//console.log(ironman)

