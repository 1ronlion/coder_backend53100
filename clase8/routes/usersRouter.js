import { Router } from 'express'

const usersRouter = Router()

let users = []

usersRouter.get("/", (req, res)=>{

    res.json({users})

})  

usersRouter.post("/", (req, res)=>{

    const user = req.body 
    users.push(user)
    res.json({status: "succes"})

})  

export default usersRouter