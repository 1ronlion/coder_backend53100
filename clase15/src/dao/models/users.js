import mongoose from "mongoose";
const { Schema } = mongoose

const collection = "Users"

const schema = new Schema({

    first_name: {
        type: String,
        require: true,
        index: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    courses: [{ type: Schema.Types.ObjectId, ref: "courses"}]
})

const usersModel = mongoose.model(collection, schema)

export default usersModel