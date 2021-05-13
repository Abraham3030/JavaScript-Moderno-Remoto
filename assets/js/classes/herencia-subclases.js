class Persona{
    // metodos y propiedades estaticas
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }
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

/**
 * Herencia o Extends
 */
class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);// herencia del contructor de la clase padre
        // Siempre que hay herencia se debe escribir el super() que es la referencia al constructor de la clase padre

        this.clan = 'Los Avengers';
    }
    // metodo quienSoy propio de class Heroe
    // con herencia de quienSoy class Persona con super.quienSoy();
    quienSoy(){
        console.log(`Mi clan es: ${this.clan}`);
        console.log('Mi funcion quienSoy padre es');
        super.quienSoy();
    }
}

// instancia
//const spiderman = new Persona('peter', 'spiderman', 'Tu amigable vecino');

const spiderman = new Heroe('peter', 'spiderman', 'Tu amigable vecino');
console.log( spiderman );
spiderman.quienSoy();
