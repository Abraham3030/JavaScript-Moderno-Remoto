/* ejemplos de logica booleana */

const regresaTrue = () => {
    console.log('Regresa false');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa true');
    return false;
}

//comprobacion de la negación
console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() );

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log( false && false); // false

//ejemplo de una condicion and con una funcion
regresaFalse() && regresaTrue();//cuando detecta false se corta la ejecucion y solo aparece el contenido de regresaFalso
regresaTrue() && regresaFalse();// deja de ejecutarse cuando detecta false y mandas el contenido de las dos funciones

console.warn('or'); // true si algun valor es verdadero
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log( false || false); // false

/////////////////////////////Asignaciones///////////////////////

console.log('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// estas asignaciones no son comunes pero se pueden hacer
const a1 = 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso';
 console.log({a1, a2, a3, a4, a5});










