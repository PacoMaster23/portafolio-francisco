// src/games/TicTacToe.jsx
import { useState } from 'react'

// Lógica pura — calcula si alguien ganó
function calcularGanador(casillas) {
  const lineas = [
    [0,1,2], [3,4,5], [6,7,8], // filas
    [0,3,6], [1,4,7], [2,5,8], // columnas
    [0,4,8], [2,4,6],           // diagonales
  ]
  for (const [a, b, c] of lineas) {
    if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
      return casillas[a] // devuelve 'X' o 'O'
    }
  }
  return null
}

function TicTacToe() {
  // El tablero es un array de 9 posiciones, todas vacías al inicio
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [esX, setEsX] = useState(true)

  const ganador = calcularGanador(tablero)
  const empate = !ganador && tablero.every(c => c !== null)

  function handleClick(i) {
    // Si ya hay ganador o la casilla está ocupada, ignorar
    if (ganador || tablero[i]) return

    // Crear copia del tablero y marcar la casilla
    const nuevoTablero = [...tablero]
    nuevoTablero[i] = esX ? 'X' : 'O'

    setTablero(nuevoTablero)
    setEsX(!esX)
  }

  function reiniciar() {
    setTablero(Array(9).fill(null))
    setEsX(true)
  }

  let mensaje
  if (ganador) mensaje = `¡Ganó ${ganador}!`
  else if (empate) mensaje = '¡Empate!'
  else mensaje = `Turno de ${esX ? 'X' : 'O'}`

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontFamily: 'monospace', color: '#e8ff6b', marginBottom: '1.5rem' }}>
        Tic Tac Toe
      </h2>

      <p style={{ color: '#666', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
        {mensaje}
      </p>

      {/* Tablero 3x3 */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 100px)',
        gap: 4, justifyContent: 'center', marginBottom: '1.5rem'
      }}>
        {tablero.map((casilla, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: 100, height: 100,
              background: '#111', border: '1px solid #2a2a2a',
              color: casilla === 'X' ? '#e8ff6b' : '#6bffce',
              fontSize: '2rem', fontFamily: 'monospace',
              cursor: casilla || ganador ? 'default' : 'pointer',
              transition: 'background .2s'
            }}
          >
            {casilla}
          </button>
        ))}
      </div>

      <button onClick={reiniciar} style={btnStyle}>
        Reiniciar
      </button>
    </div>
  )
}

const btnStyle = {
  background: 'none', border: '1px solid #2a2a2a',
  color: '#666', padding: '.6rem 1.5rem',
  fontFamily: 'monospace', fontSize: 12,
  letterSpacing: 2, cursor: 'pointer',
  textTransform: 'uppercase', borderRadius: 2
}

export default TicTacToe