/**
 * Ejemplos de ciclo for
 */

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];
// Ejemplo 1 ciclo for
console.warn('for tradicional');
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

// Ejemplo 2 ciclo for in, itera sobre arreglos []
console.warn('for in');
for(let i in heroes){
    console.log( heroes[i] );
}

// Ejemplo 3 ciclo for of, itera sobre objetos {}
// Basicamente lo que hace el for of es extraer los valores que se encuentran dentro del objeto
// se hace referencia en singular del objeto ejemplo heroes entonces debe llevar heroe
console.warn('for of');
for(let heroe of heroes){
    console.log( heroe );
}

