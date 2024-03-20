import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import mongoose from 'mongoose';
import productRouter from "./routes/productRouter.js"


import usersModel from "./dao/models/users.js"
import coursesModel from './dao/models/courses.js';
import fs from "fs"


const app = express();
const PORT = process.env.PORT || 8080

//Middlewares
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.engine('handlebars', handlebars.engine())


//Routes
app.use("/api/products", productRouter)


// const connectMongoDB = async () => {
// const DB_URL = 'mongodb://127.0.0.1:27017/ecommerce?retryWrites=true&w=majority'
// try{
//     await mongoose.connect(DB_URL)
//     console.log("Conectado con MongoDB!!!")
// }catch(error){
//     console.error("No se pudo conectar a la DB", error)
//     process.exit()
// }
// }

// connectMongoDB()

const environment = async ()=>{
    const DB_URL = 'mongodb://127.0.0.1:27017/ecommerce?retryWrites=true&w=majority'
    await mongoose.connect(DB_URL)
    console.log("Conectado con MongoDB!!!")

    // const PATH = "./src/data/data.json"

    // fs.readFile(PATH, "utf-8", (err, data)=>{

    //     if(err){
    //         console.error("Error reading data")
    //         return
    //     }

    //     const users = JSON.parse(data)

    //     userModel.insertMany(users)
    //     .then(() => console.log("Data inserted!!"))
    //     .catch(err => console.log(err))
    // })

    let result = await usersModel.insertMany({first_name: "Carolina",last_name: "Contreras",email: "caro@gmail.com",gender: "Female",courses: ["65fa2577f6ebc114415c8e51"]})
    console.log(result)

}

environment()


const server = app.listen(PORT,()=>console.log("Servier listening on port", PORT))
const io = new Server(server)//instanciando socket.io