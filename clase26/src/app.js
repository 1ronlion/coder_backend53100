import express from "express";
const app = express();
import { entorno } from "./config/config.js";


const port = entorno.port;
//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Inicio");
});


//listenes
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
