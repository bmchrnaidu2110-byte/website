# Hyntrixx Education Platform - Backend

A production-ready Node.js + Express backend scaffold for the Hyntrixx education platform.

## 🛠 Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **CORS** - Cross-origin support
- **dotenv** - Environment configuration

## 📁 Project Structure

```
src/
├── controllers/          # Business logic
│   ├── UserController.ts
│   └── CourseController.ts
├── routes/              # API endpoints
│   ├── userRoutes.ts
│   └── courseRoutes.ts
├── models/              # Data models & DB placeholders
│   └── index.ts
└── server.ts            # Main Express app
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
cd backend
npm install
```

### Development

```bash
npm run dev
```

Server runs on `http://localhost:5000` with auto-reload via `ts-node`.

### Build for Production

```bash
npm run build
npm start
```

Compiles TypeScript to `dist/` and starts the server.

## 📡 API Endpoints

### User Management
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (requires auth)
- `PUT /api/users/profile` - Update user profile (requires auth)

### Courses
- `GET /api/courses` - List all courses (with filters)
- `GET /api/courses/:courseId` - Get course details
- `POST /api/courses` - Create course (admin only)
- `PUT /api/courses/:courseId` - Update course (admin only)

### Health
- `GET /health` - Server health check

## 🗄 Database Integration (TODO)

### When Ready to Connect:

**Option 1: PostgreSQL (Recommended)**

```bash
npm install typeorm pg
```

Update `src/models/index.ts`:

```typescript
import { createConnection } from 'typeorm';

const connection = await createConnection({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Course, Enrollment, Review],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: true,
});
```

**Option 2: MySQL**

```bash
npm install typeorm mysql2
```

Change `type: 'mysql'` and `port: 3306` in config above.

### Environment Variables

Copy `.env.example` to `.env` and add:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=hyntrixx_db
JWT_SECRET=your_secret_key_here
```

## 🔐 Authentication (TODO)

Add JWT tokens for secure endpoints:

```bash
npm install jsonwebtoken bcrypt
npm install -D @types/jsonwebtoken @types/bcrypt
```

Create middleware in `src/middleware/auth.ts`:

```typescript
import jwt from 'jsonwebtoken';

export function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
```

## 📊 Key TODO Items

- [ ] Connect PostgreSQL or MySQL database
- [ ] Implement JWT authentication
- [ ] Add input validation (express-validator)
- [ ] Add password hashing (bcrypt)
- [ ] Implement enrollment system
- [ ] Add review system
- [ ] Add pagination to course listings
- [ ] Add error handling middleware
- [ ] Add request logging
- [ ] Add rate limiting
- [ ] Write API tests (Jest)
- [ ] Add API documentation (Swagger)

## 🧪 Testing (TODO)

```bash
npm install --save-dev jest ts-jest @types/jest
```

Create tests in `src/__tests__/` directory.

## 📝 Example Request

```bash
# Register user
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "username": "john_doe",
    "password": "secure_password",
    "role": "student"
  }'

# Get courses
curl http://localhost:5000/api/courses?category=student&level=beginner
```

## 🆘 Troubleshooting

- **Port already in use?** - Change `PORT` in `.env`
- **TypeScript errors?** - Run `npm run build` to check
- **Database connection fails?** - Verify credentials in `.env`

## 📄 License

Proprietary - Hyntrixx 2026
