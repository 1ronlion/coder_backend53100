const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]


let newArray = []

objetos.forEach(objeto => {
    
    const keys = Object.keys(objeto)
    //console.log("🚀 ~ keys:", keys)

    keys.forEach(key => {
        
    if(!newArray.includes(key)) newArray.push(key)

    });
    
});

//console.log("🚀 ~ newArray:", newArray)

let total = 0

objetos.forEach(objeto => {
    
    const value = Object.values(objeto)
    
    subtotal = value.reduce((a,b) => a + b, 0)
    
    total += subtotal
    
});


const data = [
	{
	  'Horas_Producción': 20,
	  Valor_CNT_Min_Uso_Maq: 0,
	  Velocidad_Carg_1: 17000,
	  Limite_Punzones_Faltantes: 7,
	  Velocidad_Jog_Cabezal: 3327,
	  Velocidad_Max_Cabezal: 5555,
	  Minutos_Produccion: 0,
	  Slider_Escala_Desarrollo: 222,
	  Velocidad_Cabezal: 12337,
	  Cant_Punzones_Faltantes: 13359,
	  Cant_Punzones_Maquina: 8,
	  Velocidad_Max_Cargadoras: -1657
	}
  ]

const result = []

data.map(element => {
	const entries = Object.entries(element)
	
	
	entries.forEach(entrie => result.push(entrie))
	
})
console.log("🚀 ~  result:",  result)