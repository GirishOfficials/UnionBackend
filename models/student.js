import mongoose from "mongoose";
import Course from "../models/course.js";

var Schema = mongoose.Schema;

const studentSchema = mongoose.Schema({
    email: { type: String, required:  true },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    courses: { type: [Schema.Types.ObjectId], ref: 'Course' }
})

export default mongoose.model("Student",studentSchema);