// src/components/Skills.jsx
import SectionHeader from './SectionHeader'
import AnimatedSection from './AnimatedSection'

const sectionStyle = { padding: '5rem 2rem', maxWidth: 960, margin: '0 auto' }

function Skills() {
  const categorias = [
    {
      titulo: 'Frontend',
      skills: [
        'React / Next.js',
        'JavaScript / TypeScript',
        'HTML5 / CSS3',
        'Bootstrap',
        'Razor Pages',
        'jQuery',
      ]
    },
    {
      titulo: 'Backend',
      skills: [
        'Node.js / Express',
        'C# / .NET Framework',
        'ASP.NET Core / Web API',
        'Entity Framework / ADO.NET',
        'REST APIs',
        'SQL Server',
        'LINQ',
        'JWT',
        'POO',
      ]
    },
    {
      titulo: 'DevOps & Tools',
      skills: [
        'Git / GitHub',
        'Postman',
        'Swagger',
        'Vercel',
        'JSON / XML',
      ]
    },
    {
      titulo: 'Arquitectura',
      skills: [
        'Clean Architecture',
        'MVC',
        'Dependency Injection',
        'Scrum / Agile',
        'HttpClient',
      ]
    },
  ]

  return (
    <section id="habilidades" style={{ padding: '5rem 2rem', maxWidth: 960, margin: '0 auto' }}>
      <AnimatedSection>
        <SectionHeader numero="02" titulo="Habilidades" />
      </AnimatedSection>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 1, background: '#2a2a2a'
      }}>
        {categorias.map(({ titulo, skills }, i) => (
          <AnimatedSection key={titulo} delay={i * 0.1}>
            <div style={{ background: '#111', padding: '1.5rem', height: '100%' }}>
              <p style={{
                fontFamily: 'monospace', fontSize: 11, color: '#e8ff6b',
                letterSpacing: 2, textTransform: 'uppercase', marginBottom: '1rem'
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
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

export default Skills