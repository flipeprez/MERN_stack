const tech = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']
const numb = [321,598,46]; 

// Filter
 const nuevoArray = tech.filter((tecnologia) => tecnologia !== 'HTML' )
 const resultado = numb.filter(numero => numero > 46)

// Includes
 const resultado_inc = tech.includes('CSS')

// Some - return when at least one of the element in the array is true
// Some - Devuelve si al menos uno cumple la condición
 const resultado_some = numb.some( numero => numero > 46 )

// Returns the first element that meets a condition
// Find - Devuelve el primer elemento que cumple una condición
const resultado_find = numb.find( numero => numero > 46 )

//returns true or false if every elemnts meet the condition
// Every - Retorna true o false si todos cumplen la condición
const resultado_every_true = numb.every( numero => numero > 10 )
const resultado_every_false = numb.every( numero => numero > 320 )

// reduce - returns the total accumulated
// Reduce - Retorna un acumulado del total
const resultado_reduce = numb.reduce( (total, numb) =>  total + numb, 0)

console.log(nuevoArray);
console.log(resultado);
console.log(resultado_inc);
console.log(resultado_some);
console.log(resultado_find);
console.log(resultado_every_true);
console.log(resultado_every_false);
console.log(resultado_reduce);
