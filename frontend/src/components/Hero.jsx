// src/components/Hero.jsx
function Hero() {
  return (
    <section style={{
      minHeight: '88vh', display: 'flex',
      flexDirection: 'column', justifyContent: 'center',
      padding: '6rem 2rem 4rem', maxWidth: 960, margin: '0 auto'
    }}>

      <div style={{
        display: 'flex', alignItems: 'center',
        gap: 12, marginBottom: '1.5rem'
      }}>
        <div style={{ width: 32, height: 1, background: '#e8ff6b' }} />
        <span style={{
          fontFamily: 'monospace', fontSize: 12,
          color: '#e8ff6b', letterSpacing: 3, textTransform: 'uppercase'
        }}>
          Fullstack Developer
        </span>
      </div>

      <h1 style={{
        fontFamily: 'monospace', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem'
      }}>
         Francisco<br />{/*Alfonso<br /> */}
        <span style={{ color: '#e8ff6b' }}>Batalla.</span> 
        {/* <span style={{ color: '#e8ff6b' }}>Barrios.</span> */}
      </h1>

      <p style={{
        fontSize: '1.1rem', color: '#666',
        maxWidth: 480, marginBottom: '2.5rem', fontWeight: 300
      }}>
        Construyo experiencias digitales de extremo a extremo —
        desde APIs robustas hasta interfaces que la gente disfruta usar.
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#proyectos" style={btnPrimary}>Ver proyectos</a>
        <a href="#sobre-mi" style={btnOutline}>Sobre mí</a>
      </div>

    </section>
  )
}

const btnPrimary = {
  background: '#e8ff6b', color: '#0a0a0a',
  padding: '.75rem 1.75rem', textDecoration: 'none',
  fontFamily: 'monospace', fontSize: 12,
  letterSpacing: 2, textTransform: 'uppercase',
  fontWeight: 700, borderRadius: 2
}

const btnOutline = {
  border: '1px solid #2a2a2a', color: '#666',
  padding: '.75rem 1.75rem', textDecoration: 'none',
  fontFamily: 'monospace', fontSize: 12,
  letterSpacing: 2, textTransform: 'uppercase', borderRadius: 2
}

export default Hero