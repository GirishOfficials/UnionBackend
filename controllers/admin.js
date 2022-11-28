import mongoose from "mongoose";
import Faculty from '../models/faculty.js';
import Course from "../models/course.js";

export const addFaculty = async (req,res) => {
    const { name, email, contact, password } = req.body;

    const faculty = new Faculty({
        name , email, contact, password
    });

    try {
        await faculty.save();
        res.status(201).json(faculty);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const addCourse = async (req,res) => {
    const course = req.body;
    course.startDate = new Date(course.startDate);
    course.endDate = new Date(course.endDate);
    const newCourse = new Course(course);

    try {
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCourse = async (req,res) => {
    // const { id, name, desciption, faculty, startDate, endDate, price, drivelink, imageUrl } = req.body;
    const data = req.body;
    try {
        const updatedCourse = await Course.findOneAndUpdate({ id }, data);
        res.status(201).json(updatedCourse);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}