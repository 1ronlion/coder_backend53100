import toysController from "../controllers/toys.controller.js";
import { Router } from "express";
const router = Router()


router.get('/toys', toysController.getAllToys)
router.post('/toys', toysController.createToy)






export default router;
