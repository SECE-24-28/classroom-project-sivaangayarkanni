import Lead from '../models/Lead.js'

// Get all leads
export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().populate('createdBy', 'name email')
    
    res.json({
      success: true,
      count: leads.length,
      data: leads
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}

// Get lead by ID
export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id).populate('createdBy', 'name email')
    
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      })
    }

    res.json({
      success: true,
      data: lead
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}

// Create new lead
export const createLead = async (req, res) => {
  try {
    const leadData = {
      ...req.body,
      createdBy: req.user._id
    }

    const lead = await Lead.create(leadData)
    
    res.status(201).json({
      success: true,
      message: 'Lead created successfully',
      data: lead
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}

// Update lead
export const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      })
    }

    res.json({
      success: true,
      message: 'Lead updated successfully',
      data: lead
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}

// Delete lead
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id)

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      })
    }

    res.json({
      success: true,
      message: 'Lead deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}