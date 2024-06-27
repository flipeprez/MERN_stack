/*export function sumar(n1 , n2){
    return (n1 + n2)
} 

export function restar(n1 , n2){
    return (n1 - n2)
}
*/
//otra forma de exportar 
//other way to make the export 

function sumar(n1 , n2){
    return (n1 + n2)
} 

function restar(n1 , n2){
    return (n1 - n2)
}

export {
    sumar,
    restar
}
