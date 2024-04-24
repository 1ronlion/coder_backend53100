import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Clave secreta para firmar el token JWT
const JWT_SECRET = "practica-integradora";
//hasheo de password
export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

//validar password
export const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

// Generar un token JWT
export const generateToken = (email) => {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
};
export default __dirname;
