import { Schema, model } from "mongoose";

const contactModel = new Schema({
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  phone: { type: String, require: true },
});

export default model("Contact", contactModel);
