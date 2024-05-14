import express from "express";
import { config } from "dotenv";
import __dirname from "./utils.js";

import nodemailer from "nodemailer";
//initialization
const app = express();
config();

//settings
app.set("PORT", process.env.PORT || 3000);

//twilio
const mailOptions = {
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
};
//nodemailer
const transport = nodemailer.createTransport(mailOptions);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
//routes
app.get("/", (req, res) => {
  res.send("Inicio");
});

//mail route
app.get("/mail", async (req, res) => {
  const result = await transport.sendMail({
    from: `Correo de prueba <${process.env.MAIL_USERNAME}>`,
    to: `${process.env.MAIL_USERNAME}`,
    subject: "Correo de prueba",
    html: `<div>
              <h1>CORREO TEST</h1>
              <p>Correo sin adjunto</p>
          </div>`,
  });
  res.send("Correo enviado");
});
app.get("/mail-adjunto", async (req, res) => {
  const result = await transport.sendMail({
    from: `Correo de prueba <${process.env.MAIL_USERNAME}>`,
    to: `${process.env.MAIL_USERNAME}`,
    subject: "Correo de prueba",
    html: `<div>
              <h1>CORREO TEST</h1>
              <p>Correo con adjunto</p>
          </div>`,
    attachments: [
      {
        filename: "img1.jpg",
        path: __dirname + "/public/img/img1.jpg",
        cid: "img1",
      },
    ],
  });
  res.send("Correo enviado");
});

//sms

//listeners
app.listen(app.get("PORT"), console.log(`Server on port ${app.get("PORT")}`));
