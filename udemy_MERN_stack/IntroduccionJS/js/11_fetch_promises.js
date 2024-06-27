//Fetch API and promises
//el metodo fetch lanza el proceso de solicitud de un recurso de red 
//fetch method make a request to a network resource

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'
const url3 = 'https://jsonplaceholder.typicode.com/todos'

fetch(url)
    .then((response) => {
        if (response.ok){
            return response.json()
        }
        throw new Error('something goes wrong...')
    })
    .then(data=> console.log(data))
    .catch(error => console.log(error.message)) 

//fetch API con async/await 
const APIConsult = async () => {
    try {
        const start = performance.now()
        const response = await fetch(url)
        if (!response.ok){
            throw new Error('something goes wrong')
        }
        const data = await response.json()
        console.log(data)
        const end = performance.now()
        console.log(`result for the first function is: ${end - start} ms`)
    }catch (error) {
        console.log(error)
    }
} 

APIConsult(); 

//this methods are equivalents /los metodos anteriores son similares

/* 
measuring performances with performance.now() 
and comparing the difference between  methods
/midiendo y comparando diferencia de desempeno 
*/ 
const APIConsult1 = async () => {
    try {
        const start = performance.now()
        
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        const response2 = await fetch(url2)
        const data2 = await response2.json()
        console.log(data2)

        const response3 = await fetch(url3)
        const data3 = await response3.json()
        console.log(data3)
        const end = performance.now()
        
        console.log(`result for the first function is: ${end - start} ms`)
    }catch (error) {
        console.log(error)
    }
}
APIConsult1();

const consultarAPI2 = async () => {
    try {
        const start = performance.now()

        const [resp, resp2, resp3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])

        const [data, data2, data3] = await Promise.all([resp.json(), resp2.json(), resp3.json()])

        console.log(data)
        console.log(data2)
        console.log(data3)

        const end = performance.now()
        console.log(`result for the second function is: ${end - start} ms`)
    } catch (error) {
        console.log(error.message)
    }
}

consultarAPI2()
