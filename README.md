# Day 12 - CRUD Operations, Authentication & Authorization Using JWT Security

## Overview
This project implements a complete backend system with CRUD operations, JWT-based authentication, and role-based authorization for a CRM application.

## Features
- ✅ User Management (CRUD)
- ✅ Lead Management (CRUD)
- ✅ Contact Management (CRUD)
- ✅ JWT Authentication
- ✅ Password Encryption (bcrypt)
- ✅ Role-based Authorization
- ✅ Protected Routes
- ✅ Environment Variables
- ✅ MongoDB Integration

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create .env file with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/crm_database
JWT_SECRET=crm_jwt_secret_key_2024
JWT_EXPIRE=24h
NODE_ENV=development
```

3. Start the server:
```bash
npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile (Protected)

### Users (Admin Only)
- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get user by ID
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user

### Leads
- GET `/api/leads` - Get all leads (Protected)
- GET `/api/leads/:id` - Get lead by ID (Protected)
- POST `/api/leads` - Create lead (Protected)
- PUT `/api/leads/:id` - Update lead (Protected)
- DELETE `/api/leads/:id` - Delete lead (Admin only)

### Contacts
- GET `/api/contacts` - Get all contacts (Protected)
- GET `/api/contacts/:id` - Get contact by ID (Protected)
- POST `/api/contacts` - Create contact (Protected)
- PUT `/api/contacts/:id` - Update contact (Protected)
- DELETE `/api/contacts/:id` - Delete contact (Admin only)

## Security Features
- JWT token-based authentication
- Password hashing with bcrypt
- Role-based access control (user/admin)
- Protected routes middleware
- Environment variables for sensitive data

## Testing with Postman
1. Register a new user
2. Login to get JWT token
3. Use token in Authorization header: `Bearer <token>`
4. Test CRUD operations on protected routes

## Project Structure
```
day 12/
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── leadController.js
│   └── contactController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   ├── Lead.js
│   └── Contact.js
├── routes/
│   ├── auth.js
│   ├── users.js
│   ├── leads.js
│   └── contacts.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```