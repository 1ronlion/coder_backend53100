import { Router } from "express";
import {
  getUsers,
  getUserById,
  saveUser,
} from "../controllers/users.controller.js";
const router = Router();

router.get("/", getUsers);
router.get("/:uid", getUserById);
router.post("/", saveUser);

export default router;
