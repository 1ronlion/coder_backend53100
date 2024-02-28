const socket = io()
console.log("🚀 ~ ", "Connected!")

//Primera parte: enviar caracter por caracter.
const input = document.getElementById('textbox');
const log = document.getElementById('log')
input.addEventListener('keyup',evt=>{
    if(evt.key === "Enter"){
        socket.emit('message', input.value)
        //input.value = ""
    }
})

socket.on('log', data => {

    let logs = ""

    data.logs.forEach(element => {
        logs += `${element.socketid} = ${element.message}`
    });

    log.innerHTML+=logs;

})


//Desafio entregable
// const form = document.getElementById("products")

// form.addEventListener('submit', (e)=>{

//     e.preventDefault()
//     socket.emit('message', input.value)

// })