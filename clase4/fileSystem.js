const fs = require ('fs');
const PATH = './ejemplo.txt'


// fs.writeFileSync(PATH, "Hola clase")


// let result = fs.readFileSync(PATH, 'utf-8')
// console.log("🚀 ~ result:", result)

// fs.appendFileSync(PATH, "Algo mas")

// result = fs.readFileSync(PATH, 'utf-8')
// console.log("🚀 ~ result:", result)


// fs.unlinkSync(PATH, () => console.log("archivo eliminado"))


fs.writeFile(PATH, "Mensaje \n", (error) => {

    if(error) return console.log(error)

        fs.readFile(PATH, 'utf8', (error, result) => {

            if(error) return console.log(error)

            console.log(result)

            fs.appendFile(PATH, "Mas contenido", (error)=> {

                if(error) return console.log(error)

                fs.readFile(PATH, 'utf-8', (error, result)=>{

                    if(error) return console.log(error)
                    console.log(result)
            }) 
        })
     })
})

const fecha = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();

fs.writeFile('./fyh.txt',`Fecha: ${fecha} ... Hora: ${hora}`,(error)=>{
    if(error) return console.log(error);
    fs.readFile('./fyh.txt','utf-8',(error,result)=>{
        if(error) return console.log(error);
        console.log(result);
    })
});