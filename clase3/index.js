// let arrayDeFrutas = ["Kiwi", "Frutilla", "Mandarina", "Sandia"]

// arrayDeFrutas.map(fruta => console.log(fruta, fruta.length))
// arrayDeFrutas.map(fruta => imprimirFruta(fruta))


// function imprimirFruta (fruta){

//     console.log(fruta, fruta.length)

// }

// let arrayDeNumeros = [2,4,6,8,10]

// function sumarMayores(arr, callback){

//     let mayores = arr.sort((a,b) => b - a)

//     let result = callback(mayores)

//     return result

// }

// function promedio (arr){
    
//     let suma = arr[0] + arr[1]

//     let result = suma / 2

//     return result

// }

// function doble (arr){
    
//     let suma = arr[0] + arr[1]

//     let result = suma * 2

//     return result

// }


// const sumar = (a,b) => a + b 
// const restar = (a,b) => a - b
// const multiplicar = (a,b) => a * b 
// const dividir = (a,b) => a / b 

// function calculadora (a,b,callback){

//     return callback(a,b)

// }


// console.log("🚀 ~ calculadora(2,2,sumar):", calculadora(2,2,sumar))


function sumar (a,b){
    return new Promise((resolve, reject) => {
        if(a === 0 || b === 0) reject("Operacion innecesaria")
        if(a + b < 0) reject("La calculadora solo debe devolver valores positivos")
            resolve(a + b)
}) 
}

async function calculos (){
    try{
    let suma =  await sumar(1,0)
    console.log("🚀 ~ calcular ~ suma:", suma)
    // let resta = await restar(a,b)
    // let division = await dividir(a,b)
    // let multiplicacion = await multiplicar(a,b)  
    } catch (err){
        console.log(err)
    }
    
}

calculos()


