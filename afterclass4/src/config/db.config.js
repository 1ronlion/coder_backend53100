import mongoose from "mongoose";
const DB_URL =
  process.env.DB_URI ||
  "mongodb://127.0.0.1:27017/ecommerce?retryWrites=true&w=majority";

const connectDb = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Conectado con MongoDB!!!");
  } catch (error) {
    console.log("No se puede conectar a la base de datos");
  }
};

export default connectDb;
