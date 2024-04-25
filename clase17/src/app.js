import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import mongoose from "mongoose";
import productRouter from "./routes/productRouter.js";

import usersModel from "./dao/models/users.js";
import coursesModel from "./dao/models/courses.js";
import orderModel from "./dao/models/orders.js";
import studentsModel from "./dao/models/students.js";
import fs from "fs";
import { log } from "console";

const app = express();
const PORT = process.env.PORT || 8080;

//Middlewares
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());

//Routes
app.use("/api/products", productRouter);

const environment = async () => {
  const DB_URL =
    "mongodb://127.0.0.1:27017/ecommerce?retryWrites=true&w=majority";
  await mongoose.connect(DB_URL);
  console.log("Conectado con MongoDB!!!");

  //lógica a implementar
  // const usuarios = await usersModel.find({ _id: "65fc4894f55c00e227b8ace3" });
  // const userJson = JSON.stringify(usuarios, null, "\t");
  // console.log(userJson);
    // const orders= await orderModel.find()
    // console.log(orders)
const pipeline = [
  //paso 1
  {
    $match: { size: "medium" },
  },
  //paso 2
  {
    $group: {
      _id: "$name",
      total: { $sum: "$quantity" },
    },
  },
  {
    $sort: { total: 1 },
  },
];

// const orders= await orderModel.aggregate(pipeline)
// console.log(orders)
const users= await usersModel.paginate({gender:"Femenino"},{limit:3,page:2})
console.log(users)
};

environment();

const server = app.listen(PORT, () =>
  console.log("Server listening on port", PORT)
);
const io = new Server(server); //instanciando socket.io
