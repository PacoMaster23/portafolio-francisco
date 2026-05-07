function SectionHeader({ numero, titulo }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '3rem'
    }}>
      <h2 style={{
        fontFamily: 'monospace',
        fontSize: 13,
        color: '#666',
        letterSpacing: 3,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }}>
        {numero} — {titulo}
      </h2>
      <div style={{ flex: 1, height: 1, background: '#2a2a2a' }} />
    </div>
  )
}

export default SectionHeader