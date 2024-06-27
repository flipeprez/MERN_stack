//functions declarations
//permite usar código reutilizable

function choose_a_name(){
    console.log( 1 + 1 )
}

choose_a_name();

function choose_a_name2(){
    console.log( 2 + 2 )
}

choose_a_name2();

//functions with params
//funciones con parámetros 
function parameter_func( num1, num2){
    console.log( num1 + num2 )
}

//call parameter_func
//pasamos los parametros a la función
parameter_func(156, 965);
parameter_func(15, 96);

//function expressions
const expressions_sus = function parameter_func(num1 , num2 ){
    console.log( num1 - num2)
} 

expressions_sus(20,10);
expressions_sus(1565,1000);

//arrows functions

const arrow_function_exp = (num1 , num2 ) => {
    console.log( num1 * num2)
}

arrow_function_exp(7,7);

//function than return values
//funciones que retornan valores
const arrow_function_exp1 = (num1 , num2 ) => {
    return ( num1 * num2)
}

const result = arrow_function_exp1(6,6);
console.log(result); 




































