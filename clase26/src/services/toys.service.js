//traemos la persistencia
//Esto puede ser una clase
import database from "../persistencia/memory.js";

const getToyById = (id) => {
  return database.toys.find((toy) => toy.id === id);
};

const getAllToys = () => {
  return database.toys;
};

const createToy = (newToy) => {
  database.toys.push(newToy);
};

export default {
  getAllToys,
  getToyById,
  createToy,
};
