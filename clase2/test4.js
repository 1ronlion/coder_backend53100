//ES11

//NULLISH 

const nullValue = null
const emptyStr = ""
const number = 0

// const A = nullValue || "DefaultValue"
// console.log("🚀 ~ A:", A)
// const B = emptyStr || "DefaultValue"
// console.log("🚀 ~ B:", B)
// const C = number || "DefaultValue"
// console.log("🚀 ~ C:", C)


const A = nullValue ?? "DefaultValue"
console.log("🚀 ~ A:", A)
const B = emptyStr ?? "DefaultValue"
console.log("🚀 ~ B:", B)
const C = number ?? "DefaultValue"
console.log("🚀 ~ C:", C)



// if(nullValue != null){

//     console.log("No soy un null")

// }else{

//     console.log("Soy null")

// }

nullValue != null ? console.log("No soy null") : console.log("Soy null")