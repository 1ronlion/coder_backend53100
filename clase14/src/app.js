import express from "express"
import mongoose from "mongoose"
import studentsRouter from "./routes/studentsRouter.js"

const app = express()
const PORT = 8080
const server = app.listen(PORT, ()=> console.log("Server running in", PORT))

const DB_URL = "mongodb+srv://1ronlion:J9WhGth363dVpWMH@cluster0.3ln3p8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connection = mongoose.connect(DB_URL)

app.use(express.json())

app.use(studentsRouter)

