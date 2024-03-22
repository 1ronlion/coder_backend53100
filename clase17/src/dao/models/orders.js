import mongoose from  'mongoose'
const orderCollection = "Orders";
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    enum: ["large", "medium", "small"],
    default: "medium",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const OrderModel = mongoose.model(orderCollection, orderSchema);

export default OrderModel;
