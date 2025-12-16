import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['New', 'Qualified', 'Proposal', 'Won', 'Lost'],
    default: 'New'
  },
  value: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Lead', leadSchema)