// src/pages/Games.jsx
import TicTacToe from '../games/TicTacToe'
import Blackjack from '../games/Blackjack'
import { useState } from 'react'

function Games() {
  const [juegoActivo, setJuegoActivo] = useState('tictactoe')

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{
        fontFamily: 'monospace', color: '#e8ff6b',
        marginBottom: '2rem', fontSize: '2rem'
      }}>
        Mis juegos
      </h1>

      {/* Selector de juego */}
      <div style={{ display: 'flex', gap: 4, marginBottom: '3rem' }}>
        {['tictactoe', 'blackjack'].map(juego => (
          <button
            key={juego}
            onClick={() => setJuegoActivo(juego)}
            style={{
              ...btnTab,
              borderColor: juegoActivo === juego ? '#e8ff6b' : '#2a2a2a',
              color: juegoActivo === juego ? '#e8ff6b' : '#666'
            }}
          >
            {juego === 'tictactoe' ? 'Tic Tac Toe' : 'Blackjack'}
          </button>
        ))}
      </div>

      {/* Renderiza el juego activo */}
      {juegoActivo === 'tictactoe' && <TicTacToe />}
      {juegoActivo === 'blackjack' && <Blackjack />}
    </div>
  )
}

const btnTab = {
  background: 'none', border: '1px solid',
  padding: '.6rem 1.5rem', fontFamily: 'monospace',
  fontSize: 12, letterSpacing: 2, cursor: 'pointer',
  textTransform: 'uppercase', borderRadius: 2,
  transition: 'all .2s'
}

export default Games