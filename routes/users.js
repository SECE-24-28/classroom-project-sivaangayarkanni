import express from 'express'
import { getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js'
import { authenticateToken, authorizeRoles } from '../middleware/auth.js'

const router = express.Router()

// All routes require authentication
router.use(authenticateToken)

// Get all users (Admin only)
router.get('/', authorizeRoles('admin'), getAllUsers)

// Get user by ID
router.get('/:id', getUserById)

// Update user (Admin only)
router.put('/:id', authorizeRoles('admin'), updateUser)

// Delete user (Admin only)
router.delete('/:id', authorizeRoles('admin'), deleteUser)

export default router