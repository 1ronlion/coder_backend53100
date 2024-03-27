import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
const app = express();

mongoose.connect(
  "URL DE MONGO",//usa una url local o desde atlas
  () => {
    console.log("Database is connected");
  }
);

app.engine("handlebars", handlebars.engine());

app.set("views", __dirname + "/views");
app.set("layouts", __dirname + +"/views/layouts/main.handlebars");

app.set("view engine", "handlebars");

app.use("/", viewsRouter);
app.listen(5000, () => console.log("Listening on PORT 5000"));
