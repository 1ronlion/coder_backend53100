import mongoose from "mongoose";
//importar paginate
import mongoosePaginate from 'mongoose-paginate-v2' 
const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    index: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  cart: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

// Aplica el plugin de paginación
userSchema.plugin(mongoosePaginate)

const userModel = mongoose.model("User", userSchema);

export default userModel;
