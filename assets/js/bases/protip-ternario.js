// Ejemplo 1
const elMayor = (a, b) => (a>b) ? a : b;

const tiendaMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';

console.log(elMayor(20, 15));
console.log(tiendaMembresia(true));
console.log(tiendaMembresia(false));

// Ejemplo 2
const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    //función anonima autoinvocada
    (() => 'Nick Fury')(),
    elMayor(10, 15)
];

console.log( amigosArr );

// Ejemplo 3
// If ternario anidado
// sistema de notas cambiando la nota de valor y da el reltado en cosola
const nota = 72.5; // A+ A B+ ....
const grado = nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A' :   
              nota >= 85 ? 'B+' : 
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F' ;

console.log({nota, grado});