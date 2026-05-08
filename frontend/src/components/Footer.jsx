import useIsMobile from "../hooks/useIsMobile"
function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{
     borderTop: '1px solid #2a2a2a',
      padding: '3rem 2rem',
      maxWidth: 960, margin: '0 auto',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: '1.5rem'
    }}>
      <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#666' }}>
        © 2026 — Francisco Alfonso Batalla Barrios
      </span>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {[
          {label: 'GitHub', url: 'https://github.com/PacoMaster23'},
          {label: 'LinkedIn', url: 'https://www.linkedin.com/in/francisco-dev23/'},
          
        ].map(({label, url}) => (
          <a key={label} href={url} style={{
            fontFamily: 'monospace', fontSize: 11, color: '#666',
            textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase'
          }}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer