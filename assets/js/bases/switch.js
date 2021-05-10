/*
* Ejemplo de un condicional switch
*/

const dia = 0; // 0: Domingo...

switch( dia ){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    default:
        console.log('Otro dia de la semana');
        break;
}
