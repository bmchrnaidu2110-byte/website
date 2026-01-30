/**
 * User Controller
 * Handles user registration, login, profile management
 *
 * TODO: Implement authentication (JWT)
 * TODO: Add password hashing (bcrypt)
 * TODO: Connect to PostgreSQL/MySQL via models
 */
import { Request, Response } from "express";
export declare class UserController {
    /**
     * Register a new user
     */
    static register(req: Request, res: Response): Promise<void>;
    /**
     * Login user
     */
    static login(req: Request, res: Response): Promise<void>;
    /**
     * Get user profile
     */
    static getProfile(req: Request, res: Response): Promise<void>;
    /**
     * Update user profile
     */
    static updateProfile(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=UserController.d.ts.map