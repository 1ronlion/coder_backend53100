import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import cookieParser from "cookie-parser";
const app = express();

//Settings
const PORT = 5001;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//cookie parser
app.use(cookieParser());

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//Routes
//get
app.get("/", (req, res) => {
  res.render("cookies", { title: "Set Cookies" });
});

//post
app.post("/cookie", (req, res) => {
  const data = req.body;
  res.cookie("usuario", data, { maxAge: 1000000 }).send("ok");
});
//Listeners
const server = app.listen(PORT, () => console.log("Listening on " + PORT));
