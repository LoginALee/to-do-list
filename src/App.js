import './App.css'
import React from 'react'
import LandingPage from './pages/LandingPage'
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
