import React from 'react'
import Navbar from './components/Navbar' 
import Home from './Pages/Home'
import About from './Pages/about'
import Work from './Pages/Work'
import Office from './Pages/office'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Office />
    </>
  )
}

export default App