import userModel from "../../models/user.model.js";
import { isValidPassword, generateToken } from "../../utils.js";
export default class AuthManager {
  constructor() {
    console.log("Constructor AuthManager");
  }

  async login({ email, password }) {
    try {
      //lógica a implementar
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "error", massage: error.message });
    }
  }
}
