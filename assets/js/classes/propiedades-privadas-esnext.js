/**
 * Las propiedades privadas no estan implementadas todavia como funcionalidad 
 * en todos los navegadores, se va implementar proximamente
 */


class Rectangulo {
    /**
     * En esta parte se declaro una variable area = 0
     * para volverla privada se utiliza el # junto con
     * la variable y queda de esta manera #area
     */
    //area = 0;
    #area = 0;
    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        //this.area = this.base * this.altura;
        this.#area = this.base * this.altura;
        /*
         * Y ya no se puee modificar con una 
         * variable externa ejemplo rectatngulo.area = 100;
         * con rectangulo.#area = 100; no se puede modificar
         */
    }

}

const rectangulo = new Rectangulo(10, 15);
//rectangulo.area = 100;
// da un error cuando se ejecuta la siguiente linea de campo privado
//rectangulo.#area = 100;
console.log(rectangulo);
