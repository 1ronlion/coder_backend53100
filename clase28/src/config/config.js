import dotenv from "dotenv";

dotenv.config();

export const entorno = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  secretJWT: process.env.SECRET_JWT,
  persistence:process.env.PERSISTENCE
};
