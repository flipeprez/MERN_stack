/*
logical or y logical and 

|| or almost one is true // al menos una se cumple 

&& and all must be true // todas deben cumplirse

*/ 

const cash = 1600;
const pay = 900;
const credit_card = false;

if (cash > pay || credit_card){
    console.log('success transaction')
}   else {
    console.log('insuficient cash')
} 

// operadores ternarios 

// auth ? (si)
//     console.log('Usuario autenticado') : (sino) 
//     console.log('No Autenticado, ir a Login')

cash < pay && credit_card ?
    console.log('success transaction') :
    console.log('insuficient cash');

    