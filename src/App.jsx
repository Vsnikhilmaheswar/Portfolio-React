import { useState } from 'react'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar'
import Hero from './components/hero.jsx'
import About from './components/About.jsx'
import './App.css'
import Projects from './components/Projects.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<Header/>
    <Hero/>
    <About/>
    <Projects/>
    </>
  )
}

export default App