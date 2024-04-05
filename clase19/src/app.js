import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import session from "express-session";
import FileStore from "session-file-store";
import connectDb from "./config/database.js";
import MongoStore from "connect-mongo";

const app = express();
const PORT = process.env.PORT || 4000;
const fileStorage = FileStore(session);



const DB_URL =
  `TU URL MONGO`; //reemplazar por tu propia conexion a mongo
//Settings
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());
app.use(
  session({
    //store: new fileStorage({ path: "./sessions", ttl: 10, retries: 0 }),
    store: MongoStore.create({
      mongoUrl: DB_URL,
      ttl: 15,
    }),
    secret: "hola",
    resave: false,
    saveUninitialized: false,
  })
);
//Routes
app.get("/", (req, res) => {
  res.status(200).send("<h1>Clase 19</h1>");
});
app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Se ha visitado el sitio ${req.session.counter} veces`);
  } else {
    req.session.counter = 1;
    res.send("Bienvenido");
  }
});
//Listeners
const server = app.listen(PORT, () =>
  console.log("Server listening on port", PORT)
);
connectDb();
