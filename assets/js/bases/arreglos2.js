let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Contenido del arreglo', juegos.length);

/* imprime el primer elementos y el ultimo */
let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length - 1 ];
console.log({primero, ultimo});

/* Utilizamos una funcion .forEach() esta fucion contien tres elementos
   elementos, el indice y el arreglo */
juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

/* Funcion .push() sirva para agregar un nuevo elemento al final de un arreglo */
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({nuevaLongitud, juegos});

/* Funcion unshift sirve para agregar un nuevo elemento al principio de un arreglo */
nuevaLongitud = juegos.unshift( 'Fire Emblem' );
console.log({nuevaLongitud, juegos});

/* Función .pop sirve para eliminar el ultimo elemento de un arreglo */
let juegoBorrado = juegos.pop();
console.log( { juegoBorrado, juegos } );

/* Borrar cualquier elemento del arreglo 
   Con la funcion .splice() recibe la posicion inicial y cuantos elemetos 
   quiere borrar*/
let posicion = 1;
//Como se borro un elemento anterior solo contiene 5 
console.log(juegos);
let juegosBorrados = juegos.splice( posicion, 1 );
console.log({juegosBorrados, juegos});

/* Función .indexOf() sirve para buscar el indice de un elemento */
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);