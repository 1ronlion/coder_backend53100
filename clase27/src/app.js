import express from "express";
import { entorno } from "./config/config.js";
import userRouter from "./routes/users.router.js";
import toysRouter from "./routes/toys.router.js";
//import MongoSingleton from "./config/MongoSingleton.js";
const app = express();

const port = entorno.port;

//middlewares
app.use(express.json());

//routes
app.use("/api", userRouter);
app.use("/api", toysRouter);
//ruta principal
app.get("/", (req, res) => {
  res.status(200).send("Inicio");
});

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
