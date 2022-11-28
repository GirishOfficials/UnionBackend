import express from 'express';
import { addCourse, addFaculty, updateCourse } from '../controllers/admin.js';

const router = express.Router();

router.post('/add-faculty', addFaculty);

router.post('/add-course', addCourse);

router.post('/update-course', updateCourse);

export default router;