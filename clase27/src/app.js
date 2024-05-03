import express from "express";
import { entorno } from "./config/config.js";
import userRouter from "./routes/users.router.js";
import toysRouter from "./routes/toys.router.js";
//import MongoSingleton from "./config/MongoSingleton.js";
import cors from 'cors'

const app = express();

const port = entorno.port;

//middlewares
app.use(express.json());
app.use(cors())

//routes
app.use("/api", userRouter);
app.use("/api", toysRouter);
//ruta principal
app.get("/", (req, res) => {
  res.status(200).send("Inicio");
});

app.get('/test',(req, res)=>{
  res.json({message:"Respuesta del servidor"})
})
//listenes
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

// MongoSingleton.getInstance();
// MongoSingleton.getInstance();
// MongoSingleton.getInstance();
// MongoSingleton.getInstance();
// MongoSingleton.getInstance();
// MongoSingleton.getInstance();
// MongoSingleton.getInstance();
