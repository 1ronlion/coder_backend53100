import express from "express";
import { config } from "dotenv";
import __dirname from "./utils.js";


//initialization
const app = express();
config();

//settings
app.set("PORT", process.env.PORT || 3000);

//twilio


//nodemailer


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
//routes
app.get("/", (req, res) => {
  res.send("Inicio");
});

//mail route


//sms


//listeners
app.listen(app.get("PORT"), console.log(`Server on port ${app.get("PORT")}`));
