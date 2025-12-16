import Contact from '../models/Contact.js'

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().populate('createdBy', 'name email')
    
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}

// Get contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).populate('createdBy', 'name email')
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      })
    }

    res.json({
      success: true,
      data: contact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}

// Create new contact
export const createContact = async (req, res) => {
  try {
    const contactData = {
      ...req.body,
      createdBy: req.user._id
    }

    const contact = await Contact.create(contactData)
    
    res.status(201).json({
      success: true,
      message: 'Contact created successfully',
      data: contact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}

// Update contact
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      })
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: contact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}

// Delete contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      })
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
}