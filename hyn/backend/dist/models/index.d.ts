/**
 * Models for database integration
 *
 * PLACEHOLDER: Add your database integration here
 * Supported: PostgreSQL, MySQL, MongoDB
 *
 * Example with TypeORM or Prisma:
 * - Install: npm install typeorm pg
 * - Define entities here and migrate to DB
 */
export interface User {
    id: string;
    email: string;
    username: string;
    role: "student" | "parent" | "admin";
    createdAt: Date;
}
export interface Course {
    id: string;
    title: string;
    description: string;
    category: "student" | "kids";
    duration: number;
    level: "beginner" | "intermediate" | "advanced";
    instructor: string;
    rating: number;
    thumbnailUrl?: string;
    videoUrl?: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface Enrollment {
    id: string;
    userId: string;
    courseId: string;
    enrolledAt: Date;
    completedAt?: Date;
    progress: number;
}
export interface Review {
    id: string;
    userId: string;
    courseId: string;
    rating: number;
    comment: string;
    createdAt: Date;
}
/**
 * Database Connection Setup (TODO)
 *
 * When ready, integrate with PostgreSQL or MySQL:
 *
 * PostgreSQL Example:
 * import { createConnection } from 'typeorm';
 *
 * const connection = await createConnection({
 *   type: 'postgres',
 *   host: process.env.DB_HOST,
 *   port: parseInt(process.env.DB_PORT || '5432'),
 *   username: process.env.DB_USER,
 *   password: process.env.DB_PASSWORD,
 *   database: process.env.DB_NAME,
 *   entities: [User, Course, Enrollment, Review],
 *   synchronize: true,
 * });
 */
//# sourceMappingURL=index.d.ts.map