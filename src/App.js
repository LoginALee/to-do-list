import './App.css'
import React from 'react'
import LandingPage from './components/LandingPage'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  )
}

export default App
