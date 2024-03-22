import mongoose from "mongoose";
import mongoosePaginate, { paginate } from "mongoose-paginate-v2"
const { Schema } = mongoose;

const collection = "Users";

const schema = new Schema({
  first_name: {
    type: String,
    require: true,
    index: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  courses: {
    type: [
      {
        course: {
          type: Schema.Types.ObjectId,
          ref: "Courses",
        },
      },
    ],
  },
});
//middleware
schema.pre("find",function (){
  this.populate('courses.course')
})
//paginate
schema.plugin(mongoosePaginate)

const usersModel = mongoose.model(collection, schema);

export default usersModel;
