import express from 'express'
import { addLogger } from './utils/logger.js';
//import { addLogger } from './utils/logger-env.js';
const app = express()

app.use(addLogger)


app.get('/', (req, res)=>{
    req.logger.info('Alerta')
    console.log("Alerta")
    res.send({message:"Esto es un logger"})
})

app.get('/opsencilla', (req,res)=>{
    let sum =0
    for (let i = 0; i < 100000; i++) {
        sum+=i
        
    }
    res.send({sum})
})
app.get('/opcompleja', (req,res)=>{
    let sum =0
    for (let i = 0; i < 5e8; i++) {
        sum+=i
        
    }
    res.send({sum})
})

app.listen(3000, ()=>{
    console.log('Server on port 3000 ');
})