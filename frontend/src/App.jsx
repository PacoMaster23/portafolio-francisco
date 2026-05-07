// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Games from './pages/Games'


const sectionStyle = {
  padding: '5rem 2rem',
  maxWidth: 960,
  margin: '0 auto'
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />  
         {/* <Route path="/" element={<h1>FUNCIONA</h1>} />  */}
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App