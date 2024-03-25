import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import mongoose from "mongoose";
import session from "express-session";
import FileStore from "session-file-store";
import MongoStore from "connect-mongo";

const PASS_MONGO = "zJh6w6HQFvnL2Cg9";

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URL =
  `mongodb+srv://dannyriverol:${PASS_MONGO}@comision53100.yd2n4ln.mongodb.net/` ||
  "mongodb://127.0.0.1:27017/users?retryWrites=true&w=majority";

try {
  await mongoose.connect(DB_URL);
  console.log("Conectado a MongoDB");
} catch (error) {
  console.log("error de conexion");
}

//Settings
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());

//Routes
app.get("/", (req, res) => {
  
  res.status(200).send("<h1>Clase 19</h1>");
});

//Listeners
const server = app.listen(PORT, () =>
  console.log("Server listening on port", PORT)
);
const io = new Server(server); //instanciando socket.io
