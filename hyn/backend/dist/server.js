"use strict";
/**
 * Main Express Server
 * Initializes API endpoints and middleware
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// API Routes
app.use("/api/users", userRoutes_1.default);
app.use("/api/courses", courseRoutes_1.default);
// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ status: "Server is running" });
});
// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});
// Error handling middleware
app.use((err, req, res) => {
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
exports.default = app;
//# sourceMappingURL=server.js.map