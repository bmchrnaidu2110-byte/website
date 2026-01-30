"use strict";
/**
 * Course Routes
 * Endpoints for course management and retrieval
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CourseController_1 = require("../controllers/CourseController");
const router = (0, express_1.Router)();
/**
 * GET /api/courses
 * Get all courses with optional filtering
 * Query params: category, level, page, limit
 */
router.get("/", CourseController_1.CourseController.getAllCourses);
/**
 * GET /api/courses/:courseId
 * Get course by ID
 */
router.get("/:courseId", CourseController_1.CourseController.getCourseById);
/**
 * POST /api/courses
 * Create new course (admin only)
 * TODO: Add authentication and authorization middleware
 */
router.post("/", CourseController_1.CourseController.createCourse);
/**
 * PUT /api/courses/:courseId
 * Update course (admin only)
 * TODO: Add authentication and authorization middleware
 */
router.put("/:courseId", CourseController_1.CourseController.updateCourse);
exports.default = router;
//# sourceMappingURL=courseRoutes.js.map