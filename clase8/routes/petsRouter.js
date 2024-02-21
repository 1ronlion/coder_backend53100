import { Router } from 'express'
import __dirname from '../utils.js'
import { upload }  from './multer.js'

const petsRouter = Router()


let pets = []

petsRouter.get("/", (req, res)=>{

    res.json({pets})

})

petsRouter.get("/add", (req, res)=>{

    res.sendFile(`${__dirname}/public/views/index.html`)

})

petsRouter.post("/", upload.single('image'), (req, res)=>{
    const filename = req.file.filename
    const pet = req.body 
    pet.image = `http://localhost:8080/images/${filename}`
    
    console.log("🚀 ~ petsRouter.post ~ pet:", pet)
    pets.push(pet)
    res.json({status: "succes"})
})  

export default petsRouter