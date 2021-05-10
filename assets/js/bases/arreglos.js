
//const arr = new Array(10);
//const arr = [];
//console.log(arr);
// arreglo de video juegos
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
// imprime el arreglo completo
console.log( {videoJuegos});
// imprime la posicion 0 del arreglo y se puede imprimr cualquier posicion
console.log(videoJuegos[0]);

let arregloDeCosas = [
    true,
    123,
    'Abraham',
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]


];

//console.log(arregloDeCosas);
console.log( arregloDeCosas[0]);
/* Ahora vamos a imprimir 'Dr. Light' del arreglo creado en el arregloDeCosas 
   hacemos referencia a la posicion 7 que es el arreglo y luego a la posicion
   que queremos impirmir [7][3] como si fuera una matriz*/
console.log(arregloDeCosas[7][3]);
/* Ahora queremos imprimir 'Woodman' lo mismo accedemos a la posicion [7], 
posicion[4], posicion[1] */
console.log(arregloDeCosas[7][3][1]);