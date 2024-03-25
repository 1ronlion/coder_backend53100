import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import mongoose from "mongoose";


const app = express();
const PORT = process.env.PORT || 4000;
const DB_URL =
  process.env.DB_URL ||
  "mongodb://127.0.0.1:27017/ecommerce?retryWrites=true&w=majority";


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
  res.send("inicio");
});

//Listeners
const server = app.listen(PORT, () =>
  console.log("Server listening on port", PORT)
);
const io = new Server(server); //instanciando socket.io
