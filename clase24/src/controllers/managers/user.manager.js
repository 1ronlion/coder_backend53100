import { createHash } from "../../utils.js";
import userModel from "../../models/user.model.js";

export default class UserManager {
  constructor() {
    console.log("Constructor UserManager");
  }

  getAll = async () => {
    const result = await userModel.find();
    return result;
  };

  getById = async (id) => {
    const result = await userModel.findById(id);
    return result;
  };

  createUser = async (userData) => {
    // Hashear la contraseña antes de crear el usuario

    userData.password = createHash(userData.password);
    const result = await userModel.create(userData);
    return result;
  };

  updateUser = async (id, userData) => {
    // Hashear la contraseña antes de actualizar el usuario
    if (userData.password) {
      userData.password = createHash(userData.password);
    }
    const result = await userModel.updateOne({ _id: id }, { $set: userData });
    return result;
  };

  deleteUser = async (id) => {
    const result = await userModel.deleteOne({ _id: id });
    return result;
  };

  // Buscar con carritos incluidos
  getAllUsersWithCart = async () => {
    //logica a implementar
  };

  // Paginación
  getPaginatedUsers = async (page = 1, limit = 10) => {
   //logica a implementar
  };
}
