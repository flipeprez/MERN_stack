/*ECSMA script modules nos permite usar funciones de otros archivos en nuestras aplicaciones 
esto es muy utili al momento de reutilizar código, pero también es extremadamente util al 
momento de consumir librerias externas*/

/* ECMAScript modules are the official standard format to package JavaScript code for reuse. 
Modules are defined using a variety of import and export statements.*/

import { sumar, restar } from './functions_test.js'

const add_result = sumar( 20, 56 );
const sus_result = restar( 15, 98 ); 

console.log(`el resultado de la suma es: ${add_result} el resultado de la resta es: ${sus_result}`);


//podemos realizar exportaciones usando alias en caso de tener funciones con el mismo nombre
//we can use an alias in case if we have functions with the same name

import { sumar as add_func, restar as sus_func } from './functions_test.js'; 

const add_result1 = add_func( 20, 20 );
const sus_result1 = sus_func( 15, 100 ); 

console.log(`el resultado de la suma es: ${add_result1} el resultado de la resta es: ${sus_result1}`);
