import express  from "express";
import fs, { writeFileSync } from "fs";
import { randomUUID }  from "node:crypto";

const pathCart = "./data/carrito.json"
const app = express()
const port = 8080

app.listen(port, console.log("servidor corriendo en el puerto" + port))

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const products = [{"id":1,"title":"producto1","description":"descripcion1","price":1500,"thumbnail":"imagen1","code":"abc123","stock":51},{"id":2,"title":"producto2","description":"descripcion2","price":2500,"thumbnail":"imagen2","code":"def234","stock":42},{"id":3,"title":"producto3","description":"descripcion3","price":4500,"thumbnail":"imagen3","code":"ghi456","stock":35}]

//Rutas
app.get("/api/products/", (req,res) => {

    res.send(products)

})
app.get("/api/products/:pid/", (req,res) => {

    //(GET) Mostrar el producto que coincida con :pid

})
app.post("/api/products/", (req,res) => {

    // (POST) Crear producto

})
app.put("/api/products/:pid/", (req,res) => {

    // (PUT) Editar producto que coincida con :pid

})
app.delete("/api/products/:pid/", (req,res) => {

    // (Delete) Eliminar producto que coincida con :pid

})
app.post("/api/carts/", (req, res) => {

    // (Post) Crear un nuevo carrito

    let carrito = fs.readFileSync(pathCart, "utf-8")
    let parsedCart = JSON.parse(carrito)

    const ID = randomUUID()

    let cart = {

        id: ID,
        products: []
    
    }

    parsedCart.push(cart)
    let data = JSON.stringify(parsedCart)
    writeFileSync(pathCart, data, null)

    res.send("Carrito creado")
})

app.get("/api/carts/:cid/", (req, res) => {

    let id = req.params.cid
    let carrito = fs.readFileSync(pathCart, "utf-8")
    let parsedCart = JSON.parse(carrito)

    let finalCart = parsedCart.find((cart) => cart.id === id)
    let data = JSON.stringify(finalCart)


    res.send(data)


})
app.post("/api/carts/:cid/product/:pid", (req,res) => {

    // (Post) Agregar un producto nuevo al carrito seleccionado 
    // "9dc384b8-47e4-4895-b76d-03ea9440e5df"
    
    //Parseando el json
    let cart = fs.readFileSync(pathCart, "utf-8")
    let parsedCart = JSON.parse(cart)

    //Buscando el producto
    let pid = req.params.pid
    let foundProduct = products.find((p) => p.id == pid)

    //Buscando el carrito
    let cid = req.params.cid
    let foundCart = parsedCart.findIndex((c) => (c.id) === cid)

    //Pusheando producto
    parsedCart[foundCart].products.push(foundProduct)

    let result = parsedCart
    console.log("🚀 ~ app.post ~ result:", result)

    res.send("OK")

})




