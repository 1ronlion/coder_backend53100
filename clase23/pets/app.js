//importaciones e inicializaciones
import express from "express";
import petsRouter from "./routes/pets.router.js";

const app = express();
const port = 4001;
//middle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/pets", petsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
