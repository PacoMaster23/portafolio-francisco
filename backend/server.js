// backend/server.js
const express = require('express')
const cors    = require('cors')
require('dotenv').config()

const contactoRoutes = require('./routes/contacto')

const app  = express()
const PORT = process.env.PORT || 3001

// Middlewares — se ejecutan en cada petición antes de llegar a las rutas
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json()) // permite leer JSON en el body

// Rutas
app.use('/api/contacto', contactoRoutes)

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mensaje: 'Servidor corriendo' })
})

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})