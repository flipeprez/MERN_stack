//conditionals
//concionales
const available_money = 7000;
const retire_money = 3000;
let new_balance;

function cash_retire(){
    if (available_money >= retire_money) {
        //condition is true
        new_balance = available_money - retire_money
        console.log (`retire ${retire_money} your new balance is ${new_balance}`);
    } else 
        console.log("you don't have enought money");
}

cash_retire();

/*
> greater than // mayor que
< less than // menor que
>= greater or equal // mayor o igual
<= less or equal // menor o igual
== equal // igual
=== strict equal // igual estricto
!== diferent // diferente
 */ 

const num1 = 20
const num2 = "20"

/*
    ==  equal //(Comparador no estricto)
    === strict equal // (Comparador estricto)
*/

if(num1 === num2) {
    console.log('data are equals')
} else {
    console.log("data are not equals")
}
