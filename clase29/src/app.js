import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//routes


app.listen(4500, () => {
  console.log("Server on port 4500");
});
