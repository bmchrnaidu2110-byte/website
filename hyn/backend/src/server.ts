/**
 * Main Express Server
 * Initializes API endpoints and middleware
 */

import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import courseRoutes from "./routes/courseRoutes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "Server is running" });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.message);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`\nAPI Endpoints:`);
  console.log(`  POST   /api/users/register`);
  console.log(`  POST   /api/users/login`);
  console.log(`  GET    /api/users/profile`);
  console.log(`  PUT    /api/users/profile`);
  console.log(`  GET    /api/courses`);
  console.log(`  GET    /api/courses/:courseId`);
  console.log(`  POST   /api/courses (admin)`);
  console.log(`  PUT    /api/courses/:courseId (admin)`);
  console.log(`\n📝 TODO: Connect PostgreSQL/MySQL database`);
  console.log(`📝 TODO: Add JWT authentication`);
  console.log(`📝 TODO: Add input validation`);
});

export default app;
