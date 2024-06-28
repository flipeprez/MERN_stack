//selectors
const heading = document.querySelector('.heading'); 

console.log(heading);
console.log(heading .tagName);
console.log(heading .textContent);
console.log(heading .classList);
console.log(heading .id);

console.log('----------separator----------');

const enlace = document.querySelectorAll('.navegacion1 a')
const enlaces = document.querySelectorAll('.navegacion a')


console.log(enlace);
console.log(enlaces);

console.log('----------separator2----------');


//manipulate elements
//manipular elementos
heading.textContent = 'change content';
heading.id = 'new id';

const inputNombre = document.querySelector('#nombre'); 
inputNombre.value = 'new value' 
inputNombre.dataset.nombre = 'input';

enlaces[2].textContent = 'nuevo enlace'
enlace.forEach(enlace => enlace.textContent = 'nuevo enlace anda')

/*
clicks events
eventos con el click
*/
// Eventos del DOM - Clicks
//const heading = document.querySelector('.heading')
//const enlaces = document.querySelectorAll('.navegacion a')

heading.addEventListener('mouseenter', () => {
     heading.textContent = 'Nuevo heading al dar click...'
 })
 heading.addEventListener('mouseleave', () => {
     heading.textContent = 'Saliendo...'
 })

enlaces.forEach( enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.textContent = 'Diste click...'
    })
})

enlace.forEach( enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.textContent = 'Diste click en el otro renglon...'
    })
})


































