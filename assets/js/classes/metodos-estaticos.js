

class Persona{
    // metodos y propiedades estaticas
    // propiedad estatica
    static _conteo = 0;
    // get estatico
    static get conteo(){
        return Persona._conteo + ' instancias';
    }
    // método estatico
    // No se puede hacer refrencia a estas propiedades ya que no va tener algun valor de retorno
    static mensaje(){
        console.log(this.nombre);// arroja un undefined
        console.log('Hola a todos soy un método estatico');
    }

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

        Persona._conteo++; 
    }
    // sets y gets
    set setComidaFavorita( comida  ){
        this._comida = comida.toUpperCase();
    }
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


spiderman.quienSoy();
// set
spiderman.setComidaFavorita = 'el pastel de cereza de la tía May';
// get 
//console.log(spiderman.getComidaFavorita); 
// impresion instancia
//console.log(spiderman)

//Persona._conteo = 2;
// poqeu se generaron dos instancias con new Persona
// variable estatica
console.log('Conteo estático', Persona._conteo);
// get estatico
console.log(Persona.conteo);
// metodo estatico
Persona.mensaje();

// impresion de una propiedad estatica externa como si la clase fuera un objeto literal
// Nose debe de hacer pero se puede

Persona.propiedadExterna = 'Soy una propiedad estatica externa';
console.log(Persona.propiedadExterna);
console.log(Persona);
