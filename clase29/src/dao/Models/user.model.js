import { Schema, SchemaTypes, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  role: String,
  orders: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Orders",
    },
  ],
});
const userModel = model("Users", userSchema);

export default userModel;
