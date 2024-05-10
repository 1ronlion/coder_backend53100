import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  number: Number,
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Business",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  products: [],
  status: String,
  totalPrice: Number,
});

const orderModel = model("Orders", orderSchema);

export default orderModel;
