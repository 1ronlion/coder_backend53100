import cartManager from "../dao/services/cartManager.js"
import express from "express"


const cartManager = new cartManager()
const router = express.Router()


router.get("/all", (req,res)=> {

    let limit = req.query
    let data = cartManager.getCartById()

    res.json({data})


})

router.post("/add", (req,res)=> {

   

})

export default router



