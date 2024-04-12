import { Router } from "express";
import userModel from "../models/Users.model.js";
import { createHash, isValidPassword } from "../utils.js";
import passport from "passport";

const router = Router();

// router.post("/register", async (req, res) => {
//   //logica a implementar
//   const { first_name, last_name, email, age, password } = req.body;
//   //no olvidar validar
//   const exist = await userModel.findOne({ email: email });
//   if (exist) {
//     return res
//       .status(400)
//       .send({ status: "error", error: "el correo ya existe" });
//   }
//   const user = {
//     first_name,
//     last_name,
//     email,
//     age,
//     password: createHash(password),
//   };
//   const result = await userModel.create(user);
//   console.log(result);
//   res.status(201).send({ staus: "success", payload: result });
// });

router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failregister" }),
  async (req, res) => {
    res.status(201).send({ status: "success", message: "Usuario registrado" });
  }
);

router.get("/failregister", async (req, res) => {
  console.log("error");
  res.send({ error: "Falló" });
});

// router.post("/login", async (req, res) => {
//   //logica a implementar
//   const { email, password } = req.body;
//   const user = await userModel.findOne({ email }); //solo correo
//   if (!user) {
//     return res
//       .status(400)
//       .send({ status: "error", error: "error en las credenciales" });
//   }
//   const validarPass = isValidPassword(user, password);
//   console.log(validarPass);
//   if (!validarPass)
//     return res
//       .status(401)
//       .send({ error: "error", message: "Error de credenciales" });

//   //generamos la sesion
//   req.session.user = {
//     name: `${user.first_name} ${user.last_name}`,
//     email: user.email,
//     age: user.age,
//   };
//   delete user.password;
//   // req.session.user = user;
//   res.send({
//     status: "success",
//     payload: req.session.user,
//     message: "Inicio exitoso",
//   });
// });

//restaurar password

router.post('/login', passport.authenticate('login',{failureRedirect:"/faillogin"}),
async(req,res)=>{
if(!req.user)return res.status(400).send('error')
req.session.user = {
  first_name: req.user.first_name,
  last_name: req.user.last_name,
  email: req.user.email,
  age: req.user.age,
};
 res.status(200).send({ status: "success", payload: req.user });
})

router.get("/faillogin", async (req, res) => {
  console.log("error");
  res.send({ error: "Fallo" });
});


router.post("/restore", async (req, res) => {
  const { email, password } = req.body;
  //validar
  const user = await userModel.findOne({ email });
  console.log(user);
  if (!user)
    return res
      .status(400)
      .send({ status: "error", message: "No se encuentra el user" });
  const newPass = createHash(password);

  await userModel.updateOne({ _id: user._id }, { $set: { password: newPass } });

  res.send({ status: "success", message: "Password actualizado" });
});
export default router;
