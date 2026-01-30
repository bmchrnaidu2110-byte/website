/**
 * User Routes
 * Endpoints for user authentication and profile management
 */

import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

/**
 * POST /api/users/register
 * Register a new user
 */
router.post("/register", UserController.register);

/**
 * POST /api/users/login
 * Login user
 */
router.post("/login", UserController.login);

/**
 * GET /api/users/profile
 * Get user profile (requires authentication)
 * TODO: Add authentication middleware
 */
router.get("/profile", UserController.getProfile);

/**
 * PUT /api/users/profile
 * Update user profile (requires authentication)
 * TODO: Add authentication middleware
 */
router.put("/profile", UserController.updateProfile);

export default router;
