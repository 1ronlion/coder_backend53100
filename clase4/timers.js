const timer = (callback) => {

    setTimeout(()=>{

        callback()

    }, 3000)
}

console.log("Iniciando tarea")
let task = () => console.log("TIMER!")
timer(task)
console.log("Tarea finalizada")





const contador = () => {

    let contador = 1
    console.log("Realizando operacion")

    let timer = setInterval(()=>{

        console.log("Hola soy", contador ++)

        if(contador > 6){

            console.log("tarea finalizada")
            clearInterval(timer)

        }

    }, 1000)

}

console.log("iniciando tarea")
contador()