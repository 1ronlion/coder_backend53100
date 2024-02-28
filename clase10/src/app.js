import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import viewRouter from './routes/views.router.js'

const app = express();
const port = 8080

//Middlewares
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.engine('handlebars', handlebars.engine())

//app.use(viewRouter)

app.get('/',(req,res)=>{
    res.render('home', {logs})
})

const server = app.listen(port,()=>console.log("Listening in", port))
const io = new Server(server)//instanciando socket.io


const logs = []

io.on('connection', socket =>{

    console.log("Connected!")

    socket.on("message", (data)=> {
    console.log("🚀 ~ socket.on ~ data:", data)

    logs.push({socketid: socket.id, message: data})
        
        io.emit('log',{logs})
        console.log("🚀 ~ logs:", logs)
        
    })

})

