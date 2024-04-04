//imports
import express from "express";
import productRouter from "./routes/productRouter.js";
import connectDb from "./config/db.config.js";

//Inicio
const app = express();
const PORT = process.env.PORT || 3000;

//Settings

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
app.use("/api/products", productRouter);


//listeners
const server = app.listen(PORT, () =>
  console.log("Server listening on port", PORT)
);
//llamo a la conexión a la base de datos
connectDb()