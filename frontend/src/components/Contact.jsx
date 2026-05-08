// src/components/Contact.jsx
import { useState } from 'react'

const API_URL = import.meta.env.PROD
  ? 'portfolio-batalla-francisco.up.railway.app'
  : 'http://localhost:3001';
  
function Contact() {
  const [form, setForm]       = useState({ nombre: '', email: '', mensaje: '' })
  const [estado, setEstado]   = useState('idle') // idle | cargando | ok | error
  const [respuesta, setRespuesta] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setEstado('cargando')

    try {
      const res = await fetch(`${API_URL}/api/contacto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()

      if (res.ok) {
        setEstado('ok')
        setRespuesta(data.mensaje)
        setForm({ nombre: '', email: '', mensaje: '' })
      } else {
        setEstado('error')
        setRespuesta(data.error)
      }
    } catch (err) {
      setEstado('error')
      setRespuesta('No se pudo conectar con el servidor.')
    }
  }
  

  return (
    <section id="contacto" style={sectionStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: 13, color: '#666', letterSpacing: 3, textTransform: 'uppercase' }}>
          04 — Contacto
        </h2>
        <div style={{ flex: 1, height: 1, background: '#2a2a2a' }} />
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>

        <div style={campoStyle}>
          <label style={labelStyle}>Nombre</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            style={inputStyle}
          />
        </div>

        <div style={campoStyle}>
          <label style={labelStyle}>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            style={inputStyle}
          />
        </div>

        <div style={campoStyle}>
          <label style={labelStyle}>Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="¿En qué puedo ayudarte?"
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>

        {respuesta && (
          <p style={{
            fontFamily: 'monospace', fontSize: 13, marginBottom: '1rem',
            color: estado === 'ok' ? '#6bffce' : '#e8593c'
          }}>
            {respuesta}
          </p>
        )}

        <button
          type="submit"
          disabled={estado === 'cargando'}
          style={{
            background: '#e8ff6b', color: '#0a0a0a',
            border: 'none', padding: '.75rem 2rem',
            fontFamily: 'monospace', fontSize: 12,
            letterSpacing: 2, textTransform: 'uppercase',
            fontWeight: 700, cursor: 'pointer', borderRadius: 2,
            opacity: estado === 'cargando' ? 0.6 : 1
          }}
        >
          {estado === 'cargando' ? 'Enviando...' : 'Enviar mensaje'}
        </button>

      </form>
    </section>
  )
}

const sectionStyle = { padding: '5rem 2rem', maxWidth: 960, margin: '0 auto' }
const campoStyle   = { marginBottom: '1.5rem' }
const labelStyle   = { display: 'block', fontFamily: 'monospace', fontSize: 11,
  color: '#666', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }
const inputStyle   = { width: '100%', background: '#111', border: '1px solid #2a2a2a',
  color: '#f0f0f0', padding: '.75rem 1rem', fontFamily: 'monospace',
  fontSize: 14, borderRadius: 2, outline: 'none' }

export default Contact