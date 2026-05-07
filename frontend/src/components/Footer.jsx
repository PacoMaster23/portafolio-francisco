// Cada uno de estos archivos debe terminar así:

// components/Footer.jsx
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #2a2a2a',
      padding: '3rem 2rem',
      maxWidth: 960,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#666' }}>
        © 2026 — Francisco Alfonso Batalla Barrios
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['GitHub', 'LinkedIn', 'Email'].map(link => (
          <a key={link} href="#" style={{
            fontFamily: 'monospace', fontSize: 11, color: '#666',
            textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase'
          }}>
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer