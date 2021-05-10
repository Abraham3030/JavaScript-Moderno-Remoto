/* Se creo un objeto literal con diferentes propiedades y propiedades anidadas*/
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    estaVivo: false,
    edad: 40,
    coordenadas: {
        latitud: 34.034,
        longitud: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        cp: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    /*Pro Tip para poder utilizar un guin medio si es solamanete necesario
      al declarar una propiedad dentro de un objeto se usan comillas en la 
      propiedad, viendo el siguiente ejemplo y se manda a llamar con 
      console.log(personaje['ultima-pelicula']);*/
    "ultima-pelicula": 'Infinity War',
};
//impresion del objeto
console.log( personaje );
// impresion de la propiedad nombre se accede con objeto.proiedad
console.log( 'Nombre', personaje.nombre );
//otra manera de imprimir la propiedad objeto['propiedad']
console.log( 'Nombre', personaje['nombre']);
console.log( 'Edad', personaje.edad);
// impresion de un objeto anidado
console.log('Coordenadas: ', personaje.coordenadas);
/* como la propiedad coordenadas tiene dos atributos accedemos primero 
   colocamos el objeto, luego la propiedad, seguido del atributo*/
console.log('latitud: ', personaje.coordenadas.latitud);
console.log('longitud: ', personaje.coordenadas.longitud);
/* Se va manejar diferentes posiciones de los trajes de Iron Man */
console.log('No. de Trajes: ', personaje.trajes.length);
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length-1]);
/* Manejo de booleanos, se hace una comparación, asignando la propiedad estaVivo */
const x = 'estaVivo';
console.log('Esta vivo?', personaje[x]);
/* Impresion del Protip */
console.log('Ultima Propiedad', personaje['ultima-pelicula']);


//Mas detalles sobre los objetos literales

/* Agregar una nueva propiedad al objeto ejemplo objeto.nuevaPropiedad = algo*/
personaje.casado = true;


/* Para eliminar una propiedd de un objeto usamos la palabra reservada delete 
   y la propiedad que queremos eliminar ejemplo delete objeto.propiedad;*/
delete personaje.edad;
console.log(personaje);

/* Manejando las propiedades de un objeto como un arreglo de dos pares 
   es decir que muestre la propiedad y su contenido*/
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

/* Para que no se pueda modificar el contenido de el objeto hacemos uso de */
Object.freeze( personaje ); //Ya no se va poder modificar nada de los atributos del objeto

/* Pero si los atributos son objetos debemos hacer uso de la funcion y objeto.propiedad  */
Object.freeze( personaje.coordenadas );//asi no se modifica el objeto del objeto.

// Imprimir las propiedades de un objeto como un arreglo
const propiedades = Object.getOwnPropertyNames( personaje );
console.log(propiedades);
// Imprimir los valores de un objeto como un arreglo
const valores = Object.values( personaje );
console.log(valores);






