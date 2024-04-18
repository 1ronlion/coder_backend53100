import { Router } from 'express';
const router = Router();

const pets = [];

// Middleware para validar el formato del nombre de la mascota

// Middleware para obtener la mascota por nombre


// Endpoint para insertar una nueva mascota


// Endpoint para obtener una mascota por nombre


// Endpoint para marcar una mascota como adoptada



// Endpoint para obtener las mascotas
router.get('/', (req, res) => {
    res.json(pets);
});

export default router;

