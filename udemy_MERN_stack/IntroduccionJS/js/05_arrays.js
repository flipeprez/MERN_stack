// Arrays o Arreglos
/*
const tecnologias = [20, 30, 40, true, "React.js"]

console.log(tecnologias[4]);
*/
//modificar arrays
/* 
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
    const tecnologias2 = tecnologias. filter(function(tech) {
        if(tech !== 'HTML'){
            console.log(tech);
            //return(tech);
        }
    }) 
*/
// Destructuring arrays
const [ , , , reactjs] = tecnologias

console.log(reactjs)

//iterating loops
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

// for(let i = 0; i < tecnologias.length; i++) {
//     console.log(tecnologias[i] )
// }

// forEach
// tecnologias.forEach(function(tech) {
//     console.log(tech)
// })

// map
const arrayMap = tecnologias.map(function(tech) {
    return tech
})

// for ... of
for(let tech of tecnologias) {
    console.log(tech)
}

// console.log(arrayMap) 
