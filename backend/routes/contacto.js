// backend/routes/contacto.js
const express    = require('express')
const router     = express.Router()
const controller = require('../controllers/contacto')

// POST /api/contacto
router.post('/', controller.enviarMensaje)

module.exports = router