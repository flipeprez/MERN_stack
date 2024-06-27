//crear objetos 
const producto = {
    nombre: "new_product1",
    precio: 250, 
    disponible: false
}

//accedemos a los objetos
console.log(producto);
console.table(producto);
console.log(producto.nombre)

//destructuring 
const { nombre, precio, disponible } = producto
console.log(producto);
console.log(precio);
console.log(disponible);

// object literal enhacement
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
} 
console.log(nuevoObjeto);