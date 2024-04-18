import express from "express";
import UsersRouter from "./routes/users.js";

const app = express();
const port = 8080;
//rutas
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});