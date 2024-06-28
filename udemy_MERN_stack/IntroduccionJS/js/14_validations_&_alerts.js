//validations and warnings with js 
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const user = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value
})

//prevent new warnings 
const preWarning = document.querySelector('.alerta')
if (preWarning){
    preWarning.remove()
}

const warning = document.createElement('DIV')
alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'p-2', 'font-black')

if (user === '' || password === '') {
    alerta.textContent = 'complete all the fields'
    alerta.classList.add('bg-red-500')
} else {
    alerta.textContent = 'loading'
    alerta.classList.add('bg-green-500')
}