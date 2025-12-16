import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import leadRoutes from './routes/leads.js'
import contactRoutes from './routes/contacts.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/leads', leadRoutes)
app.use('/api/contacts', contactRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'CRM Backend API with JWT Security' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})