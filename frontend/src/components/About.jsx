// src/components/About.jsx
import SectionHeader from './SectionHeader'  
import useIsMobile from '../hooks/useIsMobile'

const sectionStyle = { padding: '5rem 2rem', maxWidth: 960, margin: '0 auto' }
const parrafo = { color: '#666', marginBottom: '1rem', fontWeight: 300, lineHeight: 1.8 }

function About() {
  const isMobile = useIsMobile()
  const stats = [
    { num: '3+',  label: 'Años de experiencia' },
    { num: '20+', label: 'Proyectos entregados' },
    { num: '10+', label: 'Clientes satisfechos' },
    { num: '∞',   label: 'Café consumido' },
  ]

  return (
    <section id="sobre-mi" style={sectionStyle}>
      <SectionHeader numero="01" titulo="Sobre mí" />

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '3rem' }}>
        <div>
          <p style={parrafo}>
            Hola, soy <strong style={{ color: '#f0f0f0' }}>Francisco Alfonso Batalla Barrios</strong>,
            desarrollador fullstack apasionado por crear soluciones elegantes.
          </p>
          <p style={parrafo}>
            Me muevo con comodidad entre frontend y backend. Disfruto tanto
            diseñar <strong style={{ color: '#f0f0f0' }}>APIs limpias y escalables</strong> como
            construir <strong style={{ color: '#f0f0f0' }}>interfaces intuitivas</strong>.
          </p>
          <p style={parrafo}>
            Disponible para proyectos freelance y posiciones remotas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#2a2a2a' }}>
          {stats.map(({ num, label }) => (
            <div key={label} style={{ background: '#111', padding: '1.5rem' }}>
              <span style={{
                fontFamily: 'monospace', fontSize: '2rem',
                color: '#e8ff6b', fontWeight: 700,
                display: 'block', marginBottom: 4
              }}>
                {num}
              </span>
              <span style={{ fontSize: 12, color: '#666', letterSpacing: 1, textTransform: 'uppercase' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About