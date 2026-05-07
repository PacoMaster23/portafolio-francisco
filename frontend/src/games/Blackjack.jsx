// src/games/Blackjack.jsx
import { useState } from 'react'

// Crear baraja completa
function crearBaraja() {
  const palos = ['♠', '♥', '♦', '♣']
  const valores = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
  const baraja = []
  for (const palo of palos) {
    for (const valor of valores) {
      baraja.push({ palo, valor })
    }
  }
  // Mezclar con Fisher-Yates
  for (let i = baraja.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]]
  }
  return baraja
}

// Calcular puntos (el As puede valer 1 u 11)
function calcularPuntos(mano) {
  let total = 0
  let ases = 0
  for (const carta of mano) {
    if (carta.valor === 'A') { total += 11; ases++ }
    else if (['J','Q','K'].includes(carta.valor)) total += 10
    else total += parseInt(carta.valor)
  }
  while (total > 21 && ases > 0) { total -= 10; ases-- }
  return total
}

function Blackjack() {
  const [baraja, setBaraja] = useState([])
  const [manoJugador, setManoJugador] = useState([])
  const [manoDealer, setManoDealer] = useState([])
  const [estado, setEstado] = useState('inicio') // inicio | jugando | fin
  const [resultado, setResultado] = useState('')

  function iniciarJuego() {
    const nuevaBaraja = crearBaraja()
    const manoJ = [nuevaBaraja.pop(), nuevaBaraja.pop()]
    const manoD = [nuevaBaraja.pop(), nuevaBaraja.pop()]
    setBaraja(nuevaBaraja)
    setManoJugador(manoJ)
    setManoDealer(manoD)
    setEstado('jugando')
    setResultado('')
  }

  function pedir() {
    const nuevaBaraja = [...baraja]
    const nuevaMano = [...manoJugador, nuevaBaraja.pop()]
    setBaraja(nuevaBaraja)
    setManoJugador(nuevaMano)

    if (calcularPuntos(nuevaMano) > 21) {
      setEstado('fin')
      setResultado('¡Te pasaste! Perdiste.')
    }
  }

  function plantarse() {
    let manoD = [...manoDealer]
    let nuevaBaraja = [...baraja]

    // El dealer pide hasta tener 17 o más
    while (calcularPuntos(manoD) < 17) {
      manoD.push(nuevaBaraja.pop())
    }

    setManoDealer(manoD)
    setBaraja(nuevaBaraja)
    setEstado('fin')

    const puntosJ = calcularPuntos(manoJugador)
    const puntosD = calcularPuntos(manoD)

    if (puntosD > 21) setResultado('¡El dealer se pasó! Ganaste.')
    else if (puntosJ > puntosD) setResultado('¡Ganaste!')
    else if (puntosJ < puntosD) setResultado('Perdiste.')
    else setResultado('¡Empate!')
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'monospace', color: '#e8ff6b', marginBottom: '2rem', textAlign: 'center' }}>
        Blackjack
      </h2>

      {estado === 'inicio' && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={iniciarJuego} style={btnAccent}>Nueva partida</button>
        </div>
      )}

      {(estado === 'jugando' || estado === 'fin') && (
        <>
          {/* Mano del dealer */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={labelStyle}>
              Dealer — {estado === 'fin' ? calcularPuntos(manoDealer) : '?'} pts
            </p>
            <div style={manoStyle}>
              {manoDealer.map((carta, i) => (
                // En juego ocultamos la segunda carta del dealer
                (estado === 'jugando' && i === 1)
                  ? <Carta key={i} oculta />
                  : <Carta key={i} carta={carta} />
              ))}
            </div>
          </div>

          {/* Mano del jugador */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={labelStyle}>
              Tú — {calcularPuntos(manoJugador)} pts
            </p>
            <div style={manoStyle}>
              {manoJugador.map((carta, i) => (
                <Carta key={i} carta={carta} />
              ))}
            </div>
          </div>

          {/* Resultado */}
          {resultado && (
            <p style={{
              fontFamily: 'monospace', fontSize: '1.2rem',
              color: '#6bffce', textAlign: 'center', marginBottom: '1.5rem'
            }}>
              {resultado}
            </p>
          )}

          {/* Botones */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {estado === 'jugando' && (
              <>
                <button onClick={pedir} style={btnAccent}>Pedir carta</button>
                <button onClick={plantarse} style={btnOutline}>Plantarse</button>
              </>
            )}
            {estado === 'fin' && (
              <button onClick={iniciarJuego} style={btnAccent}>Jugar de nuevo</button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// Componente de carta individual
function Carta({ carta, oculta }) {
  const rojo = carta && ['♥','♦'].includes(carta.palo)
  return (
    <div style={{
      width: 60, height: 90,
      background: oculta ? '#1a1a1a' : '#f0f0f0',
      border: '1px solid #2a2a2a', borderRadius: 6,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: 'monospace', fontSize: 16,
      color: oculta ? '#333' : (rojo ? '#e8593c' : '#111'),
      fontWeight: 700
    }}>
      {oculta ? '?' : `${carta.valor}${carta.palo}`}
    </div>
  )
}

const manoStyle = { display: 'flex', gap: 8, flexWrap: 'wrap' }
const labelStyle = {
  fontFamily: 'monospace', fontSize: 12,
  color: '#666', letterSpacing: 2,
  textTransform: 'uppercase', marginBottom: 8
}
const btnAccent = {
  background: '#e8ff6b', color: '#0a0a0a',
  border: 'none', padding: '.6rem 1.5rem',
  fontFamily: 'monospace', fontSize: 12,
  letterSpacing: 2, cursor: 'pointer',
  textTransform: 'uppercase', borderRadius: 2, fontWeight: 700
}
const btnOutline = {
  background: 'none', border: '1px solid #2a2a2a',
  color: '#666', padding: '.6rem 1.5rem',
  fontFamily: 'monospace', fontSize: 12,
  letterSpacing: 2, cursor: 'pointer',
  textTransform: 'uppercase', borderRadius: 2
}

export default Blackjack