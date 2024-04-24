import { Router } from "express";
//importaciones
import UserManager from "../controllers/managers/user.manager.js";
import AuthManager from "../controllers/managers/auth.manager.js";
import passport from "passport";
const router = Router();

//instanciación
const userManager = new UserManager();
const authManager = new AuthManager();

// Obtener todos los usuarios
router.get("/users",passport.authenticate('jwt', {session:false}), async (req, res) => {
  try {
    const users = await userManager.getAll();
    res.status(200).json({ users });
  } catch (error) {
    console.error(`Error al cargar los usuarios: ${error}`);
    res.status(500).json({ error: `Error al recibir los usuarios` });
  }
});

// Obtener un usuario por su ID
router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.getById(id);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ error: `Usuario con id: ${id} no encontrado` });
    }
  } catch (error) {
    console.error(`Error al cargar el usuario: ${error}`);
    res.status(500).json({ error: `Error al recibir el usuario` });
  }
});

// Crear un nuevo usuario
router.post("/user", async (req, res) => {
  try {
    const newUser = req.body;
    const result = await userManager.createUser(newUser);
    res.status(201).json({ result });
  } catch (error) {
    console.error(`Error al crear el usuario: ${error}`);
    res.status(500).json({ error: `Error al crear el usuario` });
  }
});

// Actualizar un usuario existente
router.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    const result = await userManager.updateUser(id, updatedUser);
    if (result) {
      res.status(200).json({ message: "Usuario actualizado exitosamente" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(`Error al actualizar el usuario: ${error}`);
    res.status(500).json({ error: `Error al actualizar el usuario` });
  }
});

// Eliminar un usuario por su ID
router.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userManager.deleteUser(id);
    if (deletedUser) {
      res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(`Error al eliminar el usuario: ${error}`);
    res.status(500).json({ error: `Error al eliminar el usuario` });
  }
});

//login
router.post("/login", async (req, res) => {
  //lógica a implementar
  try {
    const { email, password } = req.body;
    const user = await authManager.login({ email, password });
    console.log(user.token);
    if (user.token) {
      res
        .cookie("practica-integradora", user.token, {
          httpOnly: true,
        })
        .send({ status: "success", message: user.message });
    }
  } catch (error) {
    res.send({ status: "error", message: error });
  }
});
// En tu archivo de rutas
router.post("/logout", (req, res) => {
  //lógica a implementar
});

export default router;
