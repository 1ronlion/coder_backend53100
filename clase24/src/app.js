//imports
import express from "express";
import dbConnection from "./config/db.config.js";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import productRouter from "./routes/product.router.js";
import categoryRouter from "./routes/category.router.js";
import userRouter from "./routes/user.router.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import initilizePassport from './config/passport.config.js'

//settings
const app = express();
app.set("PORT", process.env.PORT || 4000);

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser())
initilizePassport()
app.use(passport.initialize())

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.engine("handlebars", handlebars.engine());

//routes
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", userRouter);


//listener
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
dbConnection();

