import { Router } from "express";
import userModel from "../models/Users.model.js";
import { createHash, isValidPassword } from "../utils.js";

const router = Router();

router.post("/register", async (req, res) => {
  //logica a implementar
  const { first_name, last_name, email, age, password } = req.body;
  //no olvidar validar
  const exist = await userModel.findOne({ email: email });
  if (exist) {
    return res
      .status(400)
      .send({ status: "error", error: "el correo ya existe" });
  }
  const user = {
    first_name,
    last_name,
    email,
    age,
    password: createHash(password),
  };
  const result = await userModel.create(user);
  console.log(result);
  res.status(201).send({ staus: "success", payload: result });
});

router.post("/login", async (req, res) => {
  //logica a implementar
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }); //solo correo
  if (!user) {
    return res
      .status(400)
      .send({ status: "error", error: "error en las credenciales" });
  }
  const validarPass = isValidPassword(user, password);
  console.log(validarPass);
  if (!validarPass)
    return res
      .status(401)
      .send({ error: "error", message: "Error de credenciales" });

  //generamos la sesion
  req.session.user = {
    name: `${user.first_name} ${user.last_name}`,
    email: user.email,
    age: user.age,
  };
  delete user.password;
  // req.session.user = user;
  res.send({
    status: "success",
    payload: req.session.user,
    message: "Inicio exitoso",
  });
});

export default router;
