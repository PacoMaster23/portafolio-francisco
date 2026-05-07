// src/components/Skills.jsx
import SectionHeader from './SectionHeader'  // 👈 misma importación

const sectionStyle = { padding: '5rem 2rem', maxWidth: 960, margin: '0 auto' }

function Skills() {
  const categorias = [
    {
      titulo: 'Frontend',
      skills: ['React / Next.js', 'JavaScript ES2024', 'HTML5 / CSS3', 'TypeScript', 'Tailwind CSS']
    },
    {
      titulo: 'Backend',
      skills: ['Node.js / Express', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB']
    },
    {
      titulo: 'DevOps',
      skills: ['Docker', 'Git / GitHub', 'AWS / Vercel', 'CI/CD', 'Linux / Bash']
    },
    {
      titulo: 'Metodologías',
      skills: ['Scrum / Agile', 'TDD', 'Clean Architecture', 'Code Review', 'Pair Programming']
    },
  ]

  return (
    <section id="habilidades" style={sectionStyle}>
      <SectionHeader numero="02" titulo="Habilidades" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 1,
        background: '#2a2a2a'
      }}>
        {categorias.map(({ titulo, skills }) => (
          <div key={titulo} style={{ background: '#111', padding: '1.5rem' }}>
            <p style={{
              fontFamily: 'monospace', fontSize: 11,
              color: '#e8ff6b', letterSpacing: 2,
              textTransform: 'uppercase', marginBottom: '1rem'
            }}>
              {titulo}
            </p>
            {skills.map(skill => (
              <div key={skill} style={{
                display: 'flex', alignItems: 'center',
                gap: 10, marginBottom: 8, fontSize: 13, color: '#666'
              }}>
                <div style={{
                  width: 4, height: 4, borderRadius: '50%',
                  background: '#6bffce', flexShrink: 0
                }} />
                {skill}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills