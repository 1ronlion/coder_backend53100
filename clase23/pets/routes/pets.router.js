import { Router } from "express";
const router = Router();

const pets = [];

// Middleware para validar el formato del nombre de la mascota
const validatePetName = (req, res, next) => {
  const petName = req.params.pet;
  if (!/^[a-zA-Z\s]+$/.test(petName)) {
    return res.status(400).json({
      error: "El nombre de la mascota solo puede contener letras y espacios.",
    });
  }
  next();
};

// Middleware para obtener la mascota por nombre
router.param("pet", (req, res, next, petName) => {
  const pet = pets.find((pet) => pet.name === petName);
  if (!pet) {
    return res.status(404).json({ error: "Mascota no encontrada." });
  }
  req.pet = pet;
  next();
});

// Endpoint para insertar una nueva mascota
router.post("/", (req, res) => {
  const { name, specie } = req.body;
  if (!name || !specie) {
    return res.status(400).json({ error: "Name y specie requerido" });
  }
  const newPet = { name, specie };
  pets.push(newPet);
  res.status(201).json(newPet);
});

// Endpoint para obtener una mascota por nombre
router.get("/:pet", validatePetName, (req, res) => {
  res.json(req.pet);
});
// Endpoint para marcar una mascota como adoptada
router.put("/:pet", validatePetName, (req, res) => {
  req.pet.adopted = true;
  pets.push(req.pet);
  res.json(req.pet);
});
// Endpoint para obtener las mascotas
router.get("/", (req, res) => {
  res.json(pets);
});

export default router;
