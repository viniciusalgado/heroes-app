const express = require('express')
const heroRoutes = require('./routes/heroRoutes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use('/api', heroRoutes)

module.exports = app
