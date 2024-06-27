/*
// objetos manipulacion
const producto = {
    nombre: "tablet",
    precio: 1200, 
    disponible: false
}

//freeze permite no manipular el objeto
Object.freeze(producto)

//seal permite manipular propiedades pero no crear o eliminar propiedades
Object.seal(producto)

//reescribir valor 
producto.disponible = true

//agregar propiedad que no existía preiamente 
producto.imagen = 'imagen.jpg'

//eliminar propiedad
delete producto.precio 

console.log(producto);
console.table(producto); 

//destructuring de dos o mas objetos 
const producto = {
    nombre: "tablet",
    precio: 1200, 
    disponible: false
} 

const cliente = {
    nombre: "juan",
    premium: true, 
    direccion: {
        calle: "calle A entre calle B y calle C"
    }
} 

const { nombre } = producto; 
const { nombre: nombreCliente, direccion: { calle }} = cliente

console.log(nombre);
console.log(nombreCliente);
console.log(calle);
*/


//unir 2 o más objetos 
const producto = {
    nombre: "tablet",
    precio: 1200, 
    disponible: false
} 

const cliente = {
    nombre: "juan",
    premium: true, 
}

const carrito = {
    cantidad: 1,
    ...producto //spread opertator
}

console.log(carrito); 

//metodo object assaign 
const nuevoObjeto2 = Object.assign(producto, cliente) 

console.log(carrito);