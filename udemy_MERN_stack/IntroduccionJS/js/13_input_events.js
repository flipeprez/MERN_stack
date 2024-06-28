//eventos de imputs

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', () => {
    console.log('escribiendo...')
}) 

const inputNombre1 = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value)
}) 

const inputpassword = document.querySelector('#password')
inputpassword.addEventListener('input', functionpassword)

function functionpassword() {
    inputpassword.type = 'text'

    setTimeout (() => {
        inputpassword.type = 'password'
    }, 280);
} 

//eventos submit
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    if (nombre === '' || password === ''){

        console.log('please complete all the mandatory fields')
    
    } else {
        
        console.log('loading session...')
    
    }
})
