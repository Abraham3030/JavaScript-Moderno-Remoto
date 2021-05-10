
/* operedor Spread vs funcion slice 
   Se compara que instrucció se ejecuta en menos tiempo*/

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
// impirme el tiempo de finalizada la instrucción
console.timeEnd('slice');

console.time('spread');
// Manera de romper la relacion con los arreglos
const otrasFrutas2 = [ ...frutas];
// impirme el tiempo de finalizada la instrucción
console.timeEnd('spread');

/* funcion push para agregar una nueva fruta */
otrasFrutas.push('Mango');
otrasFrutas2.push('Mango');
console.table({frutas, otrasFrutas, otrasFrutas2});

