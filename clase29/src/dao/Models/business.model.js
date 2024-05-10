import { Schema, model } from "mongoose";

const businessSchema = new Schema({
  name: String,
  products: [],
});

const businessModel = model("Business", businessSchema);
export default businessModel;
