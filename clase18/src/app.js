import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT || 4000;


//Settings
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());
app.use(cookieParser("hola"))//pasamos una clave


//Routes
app.get("/", (req, res) => {
  res.send("inicio");
});
//rutas cookies
app.get('/setcookie',(req, res)=>{
  res.cookie("micookie", "Soy el rey del mundo",{maxAge:10000}).send("Set cookie")
})
app.get('/getcookie',(req, res)=>{
  res.send(req.cookies)
})
app.get('/deletecookie',(req, res)=>{
  res.clearCookie("micookie").send("Cookie removida")
})
//cookies seguras
app.get("/set-signed-cookie", (req, res) => {
  res
    .cookie("miSignedCookie", "Soy el rey del mundo mundial", { maxAge: 100000 ,signed:true})
    .send("Set signed cookie");
});
app.get("/get-signed-cookie", (req, res) => {
  res.send(req.signedCookies);
});

//Listeners
const server = app.listen(PORT, () =>
  console.log("Server listening on port", PORT)
);
const io = new Server(server); //instanciando socket.io
