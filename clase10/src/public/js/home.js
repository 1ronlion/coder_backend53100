const socket = io()

//Primera parte: enviar caracter por caracter.
const input = document.getElementById('textbox');
const log = document.getElementById('log')
input.addEventListener('keyup',evt=>{
    let {key} = evt;
    evt.target.value='';
    console.log("🚀 ~ key:", key)
})