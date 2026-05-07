// backend/controllers/contacto.js

function enviarMensaje(req, res) {
  const { nombre, email, mensaje } = req.body

  // Validar que llegaron los datos
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({
      error: 'Todos los campos son requeridos'
    })
  }

  // Por ahora solo los imprimimos en consola
  // En el futuro aquí conectarías un servicio de email
  console.log('Mensaje recibido:')
  console.log({ nombre, email, mensaje })

  res.status(200).json({
    ok: true,
    mensaje: `Gracias ${nombre}, te responderé pronto.`
  })
}

module.exports = { enviarMensaje }