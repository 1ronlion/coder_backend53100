import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import connectDb from "./config/database.js";

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

//Routes
app.get("/", (req, res) => {
  res.status(200).send("<h1>Clase 19</h1>");
});

//Listeners
const server = app.listen(PORT, () =>
  console.log("Server listening on port", PORT)
);
connectDb();
const io = new Server(server); //instanciando socket.io
