/* ejemplos de condicional if-else */
let a = 10;

if (a >= 10){
    console.log('a es menor a 10');
}else{
    console.log('a es menos a 10');
}

/* ejemplo de condicional if con el objeto Date y un else if*/

const hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

if( dia === 0 ){
    console.log('Domingo');
}else if( dia === 1 ){
    console.log('Lunes');
}else{
    console.log('Otro dia');
}

/* utilizando objetos debemos imprimir el dia de la semana */
// Sin usar if-else o switch, unicamente objetos
dia = 3;// 0:domingo, 1:lunes....

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado'
}
const diasLetras2 = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];


// día de la semana
console.log(diasLetras[dia]);
console.log(diasLetras2[dia]);