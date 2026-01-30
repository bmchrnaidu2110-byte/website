"use strict";
/**
 * User Routes
 * Endpoints for user authentication and profile management
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
/**
 * POST /api/users/register
 * Register a new user
 */
router.post("/register", UserController_1.UserController.register);
/**
 * POST /api/users/login
 * Login user
 */
router.post("/login", UserController_1.UserController.login);
/**
 * GET /api/users/profile
 * Get user profile (requires authentication)
 * TODO: Add authentication middleware
 */
router.get("/profile", UserController_1.UserController.getProfile);
/**
 * PUT /api/users/profile
 * Update user profile (requires authentication)
 * TODO: Add authentication middleware
 */
router.put("/profile", UserController_1.UserController.updateProfile);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map