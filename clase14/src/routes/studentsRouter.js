import express  from "express";
import { Router } from "express";
import studentsModel from "../models/estudiantes.js"


const router = express.Router()

export default router


// Todos los students
 router.get("/students", async (req,res)=>{

    let result = await studentsModel.find()

    res.json({result})

 })

// Students by id
router.get("/students/:id", async (req,res)=>{
    
    let id = req.params.id

    let result = await studentsModel.findById(id)
 
    res.json({result})
 
 })

// Insert students
router.post("/students/insertion", async (req,res)=>{
    
   let result = await studentsModel.insertMany(students)

   res.json({result})

})

// Create student
router.post("/students/create", async (req,res)=>{
    
    const {nombre, apellido, edad, dni, curso, nota} = req.body

    let user = {
        nombre, apellido, edad, dni, curso, nota
    }

    let result = await studentsModel.create(user)
 
    res.json({result})
 
 })

// Update student
router.put("/students/edit/:id", async (req,res)=>{
    
    let id = req.params.id

    let updateUser = req.body

    let result = await studentsModel.updateOne({_id:id},{$set:updateUser})
 
    res.json({result})
 
 })

// Delete student
router.delete("/students/delete/:id", async (req,res)=>{
    
    let id = req.params.id

    let result = await studentsModel.deleteOne({_id:id})
 
    res.json({result})
 
 })


const students = [{
    "nombre": "Steffen",
    "apellido": "Terzo",
    "edad": 36,
    "dni":"15691240",
    "curso":"Programación Backend",
    "nota":9
  }, {
    "nombre": "Jorgan",
    "apellido": "Matthis",
    "edad": 27,
    "dni":"29358120",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Haley",
    "apellido": "Proback",
    "edad": 34,
    "dni":"51241268",
    "curso":"Diseño UX/UI",
    "nota":7
  }, {
    "nombre": "Michelina",
    "apellido": "Beaglehole",
    "edad": 34,
    "dni":"24614567",
    "curso":"Diseño UX/UI",
    "nota":6
  }, {
    "nombre": "Jeralee",
    "apellido": "Postans",
    "edad": 26,
    "dni":"97212450",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Jordain",
    "apellido": "Kerner",
    "edad": 35,
    "dni":"41262234",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Harriett",
    "apellido": "Skeene",
    "edad": 33,
    "dni":"21245129",
    "curso":"Programación Backend",
    "nota":10
  }, {
    "nombre": "Andie",
    "apellido": "McIlrath",
    "edad": 20,
    "dni":"59127389",
    "curso":"Programación Frontend",
    "nota":9
  }, {
    "nombre": "Sapphira",
    "apellido": "Arnholtz",
    "edad": 17,
    "dni":"03128893",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Terra",
    "apellido": "Wadsworth",
    "edad": 31,
    "dni":"02213850",
    "curso":"Diseño UX/UI",
    "nota":10
  }]