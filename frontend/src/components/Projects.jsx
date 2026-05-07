// components/Projects.jsx
function Projects() {
  const proyectos = [
    {
      num: '001',
      titulo: 'Tic Tac Toe',
      desc: 'Juego clásico de tres en raya. Lógica de ganador, turnos y reinicio.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/PacoMaster23/TIC-TAC-TOE',
      live: null
    },
    {
      num: '002',
      titulo: 'Blackjack',
      desc: 'Juego de cartas con dealer automático, cálculo de ases y lógica de 21.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/PacoMaster23/BlackJack',
      live: null
    },
    {
      num: '003',
      titulo: 'Portfolio',
      desc: 'Este mismo portafolio — fullstack con React y Node.js.',
      tags: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/TU_USUARIO/portfolio-francisco',
      live: '#'
    },
  ]

  return (
    <section id="proyectos" style={sectionStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: 'monospace', fontSize: 13, color: '#666',
          letterSpacing: 3, textTransform: 'uppercase', whiteSpace: 'nowrap'
        }}>
          03 — Proyectos
        </h2>
        <div style={{ flex: 1, height: 1, background: '#2a2a2a' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 1, background: '#2a2a2a'
      }}>
        {proyectos?.map(({ num, titulo, desc, tags, github, live }) => (
          <div key={num} style={{
            background: '#111', padding: '2rem',
            transition: 'background .2s'
          }}>
            <p style={{
              fontFamily: 'monospace', fontSize: 11,
              color: '#444', marginBottom: '1rem', letterSpacing: 2
            }}>
              {num}
            </p>
            <h3 style={{
              fontFamily: 'monospace', fontSize: '1rem',
              color: '#f0f0f0', marginBottom: '.75rem', fontWeight: 700
            }}>
              {titulo}
            </h3>
            <p style={{ fontSize: 13, color: '#666', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              {desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '1.25rem' }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'monospace', fontSize: 10,
                  padding: '.25rem .6rem', border: '1px solid #2a2a2a',
                  color: '#666', borderRadius: 1, letterSpacing: 1
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'monospace', fontSize: 11,
                    color: '#6bffce', textDecoration: 'none',
                    letterSpacing: 1, borderBottom: '1px solid transparent'
                  }}
                  >
                  GitHub →
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'monospace', fontSize: 11,
                    color: '#e8ff6b', textDecoration: 'none',
                    letterSpacing: 1, borderBottom: '1px solid transparent'
                  }}
                >
                  Live →
                </a>
              )}
            </div>

            {/* <a href={link} style={{
              fontFamily: 'monospace', fontSize: 11,
              color: '#6bffce', textDecoration: 'none',
              letterSpacing: 1, borderBottom: '1px solid transparent'
            }}>
              Ver proyecto →
            </a>
             */}
          </div>

        ))}
      </div>
    </section>
  )
}

const sectionStyle = { padding: '5rem 2rem', maxWidth: 960, margin: '0 auto' }

export default Projects