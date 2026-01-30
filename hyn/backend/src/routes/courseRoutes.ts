/**
 * Course Routes
 * Endpoints for course management and retrieval
 */

import { Router } from "express";
import { CourseController } from "../controllers/CourseController";

const router = Router();

/**
 * GET /api/courses
 * Get all courses with optional filtering
 * Query params: category, level, page, limit
 */
router.get("/", CourseController.getAllCourses);

/**
 * GET /api/courses/:courseId
 * Get course by ID
 */
router.get("/:courseId", CourseController.getCourseById);

/**
 * POST /api/courses
 * Create new course (admin only)
 * TODO: Add authentication and authorization middleware
 */
router.post("/", CourseController.createCourse);

/**
 * PUT /api/courses/:courseId
 * Update course (admin only)
 * TODO: Add authentication and authorization middleware
 */
router.put("/:courseId", CourseController.updateCourse);

export default router;
