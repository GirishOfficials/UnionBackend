import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required:  true },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    imageUrl : { type: String },
    description : { type: String },
})

export default mongoose.model("Faculty",facultySchema);