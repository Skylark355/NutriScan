import { useState } from 'react'
import Hero from './Components/Hero/Hero'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Test from './Components/Test/Test'
import Impact from './Components/Impacts/Impact'
import Footer from './Components/Footer/Footer'

function App() {
  
  return (
    <div className='app'>
      
      <Hero />
      <HowItWorks />
      <Test />
      <Impact />
      <Footer />
      
    </div>
  )
}

export default App
