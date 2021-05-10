
/* 
* Ejemplo de un operador ternario 
* Días de semana que abrimos a las 11
* pero los fines de semana abrimos a las 9
*/

const dia = 6; // 0: domingo, l: lunes....
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Esta cerrado, hoy abrimos a las XX

//if(dia === 0 && dia === 6){
/*if( [0,6].includes( dia )){
    console.log('Fin de semana');
    horaApertura = 9;
}else{
    console.log('Dia de semana');
    horaApertura = 11;
}*/

// usamos el operador ternario
horaApertura = ([0,6].includes( dia )) ? 9 : 11;

/*if( horaActual >= horaApertura ){
    mensaje = 'Esta abierto';
}else{
    //mensaje = 'Esta cerrado, hoy abrimos a las ' + horaApertura;
    //utilizamos la interpolacion para dejar de concatenar con + y ''
    // utilizamos backtic ` puede ir lo que sea y para mostrar una variable o funcion
    // usamos ${algo}`
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}*/

//cambiamos if else por operador ternario
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje});