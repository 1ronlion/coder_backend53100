import mongoose from 'mongoose';
const { Schema } = mongoose;

const collection = "Estudiantes"

const schema = new Schema({

    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    },
    dni: {
        type: Number,
        require: true,
        unique: true
    },
    curso: {
        type: String,
        require: true
    },
    nota: {
        type: Number,
        require: true
    }
})

const studentsModel = mongoose.model(collection, schema)

export default studentsModel

// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });