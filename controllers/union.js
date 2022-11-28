import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Course from "../models/course.js";
import Faculty from "../models/faculty.js";
import Student from '../models/student.js';

const secret = 'test';

export const login = async (req,res) => {
    const { email, password } = req.body;

    try {
        const student = await Student.findOne({ email , password });
        const faculty = await Faculty.findOne({ email , password });
        var token = null;
        if(student) {
            token = jwt.sign({ email: email, id: student._id }, secret, { expiresIn: "1h" });
        } 
        if(faculty) {
            token = jwt.sign({ email: email, id: faculty._id }, secret, { expiresIn: "1h" });
        }
        res.status(201).json({ student, faculty, token });
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const getCourses = async (req,res) => {
    try {
        const courses = await Course.find();
        res.status(201).json(courses);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const getFaculties = async (req,res) => {
    try {
        const faculties = await Faculty.find();
        res.status(201).json(faculties);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const postComment = async (req,res) => {
    const { courseObjId, comment, email } = req.body;

    try {
        const course = await Course.findOne({ _id: courseObjId });
        course.comments.push({ comment, email });
        const updatedCourse = await Course.findOneAndUpdate({ _id: courseObjId }, course, { new: true });
        res.status(201).json(updatedCourse);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Girish
export const getCourseId = async (req,res) => {
    const { id } = req.params;

    try {
        const course = await Course.findOne({ _id: id });
        console.log(course);
        res.status(201).json(course);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}