import { Router } from "express";
import { auth } from "../middlewares/auth.js";
const router = Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/", auth, (req, res) => {
  res.render("profile", {
    user: req.session.user,
  });
});
router.get("/home", auth, (req, res) => {
  res.render("home", {
    user: req.session.user,
  });
});
//restaurar password
router.get("/restore", (req, res) => {
  res.render("restore");
});


export default router;
