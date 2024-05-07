import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.status(200).send({ status: "success", payload: "Todos los contactos" });
});

export default router;
