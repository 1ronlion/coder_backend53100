//ES6
//Math **

arrayDeNumeros = [0,1,2,3,4,5,6]

let result = arrayDeNumeros.map((numero, indice) => numero ** indice)
//console.log("🚀 ~ result:", result)


//INCLUDES

arrayDeNombres = ["Angel", "Abril", "Agustina"]

let result2 = arrayDeNombres.includes("Angel")
//console.log("🚀 ~ result2:", result2)


//ES10


//FLAT
arrayAnidado = [0,2,3,[0,1,2,3]]


let result3 = arrayAnidado.flat()
//console.log("🚀 ~ result3:", result3)


//TRIM

let string = "Hola clase            "

let string2 = "                  Hola clase"

string.trim()
console.log("🚀 ~ string.trim():", string.trim())
string2.trim()
console.log("🚀 ~ string2.trim():", string2.trim())
