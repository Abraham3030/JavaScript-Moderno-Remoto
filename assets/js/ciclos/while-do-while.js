
const autos = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
// ejemplo 1 de ciclo while
/*
while( i < autos.length ){
    console.log(autos[i]);
    i ++;
}
*/
// imprime el contenido de autos

// ejemplo 2 de ciclo while con una condicion que si contiene el elemento uno continue 
// solo imprime los indices que no son estrictamente iguales a 1
/*while( autos[i]){
    if( i === 1){
        i ++;
        continue;
    }
    console.log(autos[i]);
    i++;
}*/

// ejemplo 3 ciclo Do While
console.warn('Do while');
let j = 0;
do{
    console.log(autos[j]);
    j++;
} while(autos[j]);