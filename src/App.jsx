import React from 'react'
import Navbar from './components/Navbar' 
import Home from './Pages/Home'
import Contact from './Pages/contact'
import Work from './Pages/Work'
import Office from './Pages/office'
import Instagram from './Pages/instagram'


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Office />
      <Instagram />
      <Contact />
    </>
  )
}

export default App