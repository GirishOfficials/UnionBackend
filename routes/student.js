import express from 'express';
import { addCourse, getCourses, register } from '../controllers/student.js';

const router = express.Router();

router.post('/register', register);

router.post('/add-course', addCourse);

router.get('/get-courses/:email', getCourses);

export default router;