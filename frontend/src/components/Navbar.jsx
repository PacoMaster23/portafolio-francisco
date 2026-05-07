// src/components/Navbar.jsx
import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,10,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #2a2a2a',
      padding: '1rem 2rem'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'monospace', color: '#e8ff6b', letterSpacing: 2, fontSize: 14 }}>
          fab.dev
        </span>

        {/* Desktop — links directos */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#sobre-mi" style={linkStyle}>Sobre mí</a>
            <a href="#habilidades" style={linkStyle}>Skills</a>
            <a href="#proyectos" style={linkStyle}>Proyectos</a>
          </div>
        )}

        {/* Móvil — botón hamburguesa */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: '1px solid #2a2a2a',
              color: '#666', padding: '.4rem .8rem',
              fontFamily: 'monospace', fontSize: 16, cursor: 'pointer'
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Menú desplegable en móvil */}
      {isMobile && menuOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column',
          gap: '1rem', padding: '1.5rem 0',
          borderTop: '1px solid #2a2a2a', marginTop: '1rem'
        }}>
          <a href="#sobre-mi" onClick={() => setMenuOpen(false)} style={linkStyle}>Sobre mí</a>
          <a href="#habilidades" onClick={() => setMenuOpen(false)} style={linkStyle}>Skills</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)} style={linkStyle}>Proyectos</a>
        </div>
      )}
    </nav>
  )
}

const linkStyle = {
  color: '#666', textDecoration: 'none',
  fontSize: 13, letterSpacing: 1,
  textTransform: 'uppercase', transition: 'color .2s'
}

export default Navbar