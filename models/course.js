import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required:  true },
    faculty: { type: String, required: true },      // change type number to string
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    price: { type: Number, required: true },
    syllabus: { type: String },
    imagelink: { type: String, required: true },
    registration: { type: Boolean, required: true },
    comments: { 
        type: [{
            comment: String,
            email: String
        }]
    }
})

export default mongoose.model("Course",courseSchema);