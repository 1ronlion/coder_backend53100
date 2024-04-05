import mongoose from "mongoose";

const DB_URL =
  `TU URL MONGO`; //reemplazar por tu propia conexion a mongo

const connectDb = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log("error de conexion");
  }
};
export default connectDb;
