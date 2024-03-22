import mongoose from "mongoose";
const { Schema } = mongoose

const collection = "Products"

const schema = new Schema({

    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    brand: {
        type: String
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    thumbnails: {
        type: [String],
        require: true
    }

})



const productsModel = mongoose.model(collection, schema)

export default productsModel