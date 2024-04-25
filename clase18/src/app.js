import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 4001;

//Settings
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());
app.use(cookieParser("hola")); //pasamos una clave
app.use(
  session({
    secret: "Secreto",
    resave: true,
    saveUninitialized: true,
  })
);

//middleware de auth
function auth(req, res, next) {
  if (req.session.user === "pepe" && req.session.admin) {
    return next();
  }
  res.status(401).send("No estas autorizado");
}

//Routes
app.get("/", (req, res) => {
  res.send("inicio");
});
//rutas cookies
app.get("/setcookie", (req, res) => {
  res.cookie("micookie", "Soy el rey del mundo").send("Set cookie");
});
app.get("/getcookie", (req, res) => {
  res.send(req.cookies);
});
app.get("/deletecookie", (req, res) => {
  res.clearCookie("micookie").send("Cookie removida");
});
//cookies seguras
app.get("/set-signed-cookie", (req, res) => {
  res
    .cookie("miSignedCookie", "Soy el rey del mundo mundial", {
      maxAge: 100000,
      signed: true,
    })
    .send("Set signed cookie");
});
app.get("/get-signed-cookie", (req, res) => {
  res.send(req.signedCookies);
});
//ruta session
app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send("Se visitó el sitio " + req.session.counter + " veces");
  } else {
    req.session.counter = 1;
    res.send("Bienvenido/a");
  }
});
//iniciar sesion

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  if (username !== "pepe" || password !== "pepepass") {
    return res.send("Login failed");
  }

  req.session.user = username;
  req.session.admin = true;
  res.send("Login Success");
});

//cerrar sesion
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.send("Saliste de la sesion");
    } else {
      res.send({ error: err });
    }
  });
});

//rutas protegidas
app.get('/privado',auth, (req,res)=>{
  res.send("Estas en el mejor lugar")
})
//Listeners
const server = app.listen(PORT, () =>
  console.log("Server listening on port", PORT)
);
const io = new Server(server); //instanciando socket.io
