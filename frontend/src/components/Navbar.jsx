// src/components/Navbar.jsx
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,10,0.92)',
      borderBottom: '1px solid #2a2a2a',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '1rem 2rem'
    }}>
      <span style={{ fontFamily: 'monospace', color: '#e8ff6b', letterSpacing: 2 }}>
        fab.dev
      </span>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#sobre-mi" style={linkStyle}>Sobre mí</a>
        <a href="#habilidades" style={linkStyle}>Skills</a>
        <a href="#proyectos" style={linkStyle}>Proyectos</a>
        {/* <a href="/games" style={linkStyle}>Juegos</a> */}
      </div>
    </nav>
  )
}

const linkStyle = {
  color: '#666', textDecoration: 'none',
  fontSize: 13, letterSpacing: 1,
  textTransform: 'uppercase', transition: 'color .2s'
}

export default Navbar