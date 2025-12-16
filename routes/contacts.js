import express from 'express'
import { getAllContacts, getContactById, createContact, updateContact, deleteContact } from '../controllers/contactController.js'
import { authenticateToken, authorizeRoles } from '../middleware/auth.js'

const router = express.Router()

// All routes require authentication
router.use(authenticateToken)

// Get all contacts
router.get('/', getAllContacts)

// Get contact by ID
router.get('/:id', getContactById)

// Create new contact
router.post('/', createContact)

// Update contact
router.put('/:id', updateContact)

// Delete contact (Admin only)
router.delete('/:id', authorizeRoles('admin'), deleteContact)

export default router