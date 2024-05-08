import express from "express";
import { entorno } from "./config/config.js";
import contactRoutes from "./routes/contacts.route.js";
const app = express();
// import mongoose from "mongoose";
// const connection = mongoose.connect("mongodb://localhost:27017/contactos");
const port = entorno.port;

//middlewares
app.use(express.json());

//routes
app.use("/contacts", contactRoutes);
//ruta principal
app.get("/", (req, res) => {
  res.status(200).send("Inicio");
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
