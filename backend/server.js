import express from 'express'
import 'dotenv/config'
import './jobs/index.js'
import bodyParser from 'body-parser'
import routes from './routes/index.js'
import cors from './middlewares/cors.js'
import globals from './globals.js'

const { PORT } = globals
const app = express()

app.disable('x-powered-by')
app.use(cors)
app.use(bodyParser.json({ limit: '32mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/info', routes.info)

app.use((req, res) => {
  res.status(404).send(`<h1>Invalid route</h1><br>Route: ${req.path}<br>Method: ${req.method}`)
})

app.listen(PORT, () => {
  console.info(`Server is listening on PORT ${PORT}`)
})
