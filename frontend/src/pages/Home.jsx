// src/pages/Home.jsx
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function Home() {
  return (
    <main>
      
      <Hero />
       <About />
      <Skills /> 
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home