//ES8

let personas = [{

    id: 1,
    name: "Leo",
    mayorDeEdad: true

},
{

    id: 2,
    name: "Matias",
    mayorDeEdad: false

}
]

let entries = personas.map(persona => Object.entries(persona))
//console.log("🚀 ~ entries:", entries)

let keys = personas.map(persona => Object.keys(persona))
//console.log("🚀 ~ keys:", keys)

let value = personas.map(persona => Object.values(persona))
//console.log("🚀 ~ value:", value)

