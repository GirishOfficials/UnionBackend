import express from 'express';
import { getCourseId, getCourses, getFaculties, login, postComment } from '../controllers/union.js';

const router = express.Router();

router.post('/login', login);

router.get('/get-courses', getCourses);

router.get('/get-facilties', getFaculties);

router.post('/post-comment', postComment);

router.get('/get-course-id/:id', getCourseId);     

export default router;