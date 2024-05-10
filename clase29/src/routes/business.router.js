import { Router } from "express";
import {
  getBusiness,
  getBusinessById,
  saveBusiness,
} from "../controllers/business.controller.js   ";
const router = Router();

router.get("/", getBusiness);
router.get("/:bid", getBusinessById);
router.post("/", saveBusiness);

export default router;
