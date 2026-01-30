/**
 * Course Controller
 * Handles course retrieval, filtering, and management
 *
 * TODO: Connect to database
 * TODO: Implement pagination
 * TODO: Add filtering by category and level
 */
import { Request, Response } from "express";
export declare class CourseController {
    /**
     * Get all courses with optional filtering
     */
    static getAllCourses(req: Request, res: Response): Promise<void>;
    /**
     * Get single course by ID
     */
    static getCourseById(req: Request, res: Response): Promise<void>;
    /**
     * Create new course (admin only)
     */
    static createCourse(req: Request, res: Response): Promise<void>;
    /**
     * Update course (admin only)
     */
    static updateCourse(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=CourseController.d.ts.map