import express  from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js"
import userRouter from "./routes/userRouter.js"
import viewRouter from "./routes/viewsRouter.js"

const app = express()
const port = 8080

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Carpeta de vistas
app.set('views', `${__dirname}/views`)

//Motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')

//RUTAS
app.use("/api/user/", userRouter)
app.use(viewRouter)



// DESAFIO 1
// const users = [
//     {
//         name: "Mauricio",
//         last_name:"Espinosa",
//         age:26,
//         phone:"5541231355",
//         email: "correomau@correo.com"
//     },
//     {
//         name:"Marisol",
//         last_name:"Cadena",
//         age:23,
//         phone:"15431231355",
//         email:"correomary@correo.com"
//     },
//     {
//         name:"Jorge",
//         last_name:"Velez",
//         age:28,
//         phone:"4331234155",
//         email:"correojorge@correo.com"
//     },
//     {
//         name:"Uriel",
//         last_name:"Dueñas",
//         age:18,
//         phone:"1233315451",
//         email:"correouriel@correo.com"
//     },
//     {
//         name:"Verónica",
//         last_name:"Duarte",
//         age:45,
//         phone:"66521233",
//         email:"correoVero@correo.com",
//         role: "admin"
//     }
// ];


// app.get("/", (req, res)=> {
//     let random = Math.floor(Math.random()*users.length)
//     res.render('home', {user:users[random]})
// })



app.listen(port, ()=> console.log("Server listening on port", port))

