import mongoose from "mongoose";
import Student from "../models/student.js";

export const register = async (req,res) => {
    const user = req.body;

    const student = new Student(user);

    try {
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addCourse = async (req,res) => {
    const { email, courseObjId } = req.body;

    try {
        const student = await Student.findOne({ email });
        student.courses.push(courseObjId);
        const updatedStudent = await Student.findOneAndUpdate({ email }, student, { new: true });
        res.status(201).json(updatedStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getCourses = async (req,res) => {
    const { email } = req.params;

    try {
        const courses = await Student.findOne({ email });
        res.status(201).json(courses);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

