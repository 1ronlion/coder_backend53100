// import http from 'http'

// const port = 3000

// const server = http.createServer((request, response) => {
//     console.log("home")
//     response.end("Mi primer hola mundo desde backend!")

// })

// server.listen(port, () => console.log("Servidor corriendo en el puerto", port))


import express from "express";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);


const app = express()
const port = 8080

app.use(express.urlencoded({extended: true}))


app.get("/", (req,res) => {

    res.send(users)

})

app.get("/bienvenida", (req,res) => {

    res.sendFile(path.resolve(__dirname, "./index.html"))
    
})


app.get("/user", (req,res) => {

    let user = {
        nombre: "Cosme",
        apellido: "Fulanito",
        edad: 48,
        correo: "cosme@fulanito.com"
    }

    res.json(user)
    
})

app.get("/usuario/:userId", (req,res) => {

    let userId = req.params.userId

    let data = users.find((user)=> (user.id == userId))

    if(!data) return res.send("Usuario no encontrado")

    res.send(data)

})

app.get("/usuario", (req,res) => {

    let userName = req.query.name

    let finalName = userName.charAt(0).toUpperCase() + userName.substring(1, userName.length) 

    let data = users.find((user)=> (user.name == finalName))

    if(!data) return res.send("Usuario no encontrado")

    res.send(data)

})

app.get("/genero", (req,res) => {

    // let gender = req.query.gender.toUpperCase()
    // let limit = req.query.limit

    let {gender, limit} = req.query

    console.log("🚀 ~ app.get ~ limit:", limit)
   
    let data = users.filter((user)=> (user.gender == gender))

    if(!data) return res.send("Usuario no encontrado")

    res.send(data)

})



let users = [
    { id: 1, name: 'John', lastname: 'Doe', gender: 'M' },
    { id: 2, name: 'Jane', lastname: 'Doe', gender: 'F' },
    { id: 3, name: 'Alice', lastname: 'Smith', gender: 'F' },
    { id: 4, name: 'Bob', lastname: 'Johnson', gender: 'M' },
  ];
  

app.listen(port, () => console.log("Servidor corriendo en el puerto", port))




