import express from 'express'
import petsRouter from './routes/petsRouter.js'
import usersRouter from './routes/usersRouter.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()
const port = 8080

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(`${__dirname}/public`))


//Routes
app.use("/api/pets", petsRouter)
app.use("/api/users", usersRouter)


app.listen(port, ()=> console.log("Servidor corriendo en el puerto: ", port))



