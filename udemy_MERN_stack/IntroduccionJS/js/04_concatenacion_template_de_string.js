//templates de string y concatenacion 

const producto = "tablet de 12 pulgadas"
const precio = 400
const marca = "panavox"

//concatenacion 
console.log('el producto es: ' + producto); 
console.log(producto + " $ " + precio + " dolares " + marca);

//template de string 
console.log(`el producto es: ${producto}`);
console.log(`${producto} $ ${precio} dolares ${marca}`)