import express from 'express'
import { getAllLeads, getLeadById, createLead, updateLead, deleteLead } from '../controllers/leadController.js'
import { authenticateToken, authorizeRoles } from '../middleware/auth.js'

const router = express.Router()

// All routes require authentication
router.use(authenticateToken)

// Get all leads
router.get('/', getAllLeads)

// Get lead by ID
router.get('/:id', getLeadById)

// Create new lead
router.post('/', createLead)

// Update lead
router.put('/:id', updateLead)

// Delete lead (Admin only)
router.delete('/:id', authorizeRoles('admin'), deleteLead)

export default router