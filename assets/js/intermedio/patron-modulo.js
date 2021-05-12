/**
 * Para proteger nuetro codigo y que no se pueda manipular directamente por la consola del navegador,
 * se utiliza el patrón modulo, que es una función anonima autoinvocada.
 */

// Función anonima autoinvocada traficional
(function(){
    console.log('Soy una funcion anonima autoinvocada');
    console.log('Patrón modulo');
})();

// función flecha autoinvocada
(() => {
    console.log('Soy una Arrow fuction anonima autoinvocada');
    console.log('Patrón modulo');
})();

// uso del 'use strict' ejemplo
(() => {
    'use strict'
    const personas = ['Ana', 'Pedro', 'Luis'];
    console.log(personas);
})();