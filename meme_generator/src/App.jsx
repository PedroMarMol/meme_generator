import { useState } from 'react'
import Navbar from './components/Navbar'
import Meme from './components/Meme'
import memesData from './memesData'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Meme />
    </div>
  )
}