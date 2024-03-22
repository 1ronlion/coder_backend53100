import mongoose from "mongoose";
const { Schema } = mongoose

const collection = "Courses"

const schema = new Schema({
    name: {
        type: String,
        require: true,
        index: true
    },
    schedule: {
        type: [String],
        require: true
    },
    teachers: {
        type: [String],
        require: true
    }
})

const coursesModel = mongoose.model(collection, schema)

export default coursesModel