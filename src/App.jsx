import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Network from './components/Network'
import WiFi from './components/WiFi'
import Security from './components/Security'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Hardware from './components/Hardware'
import Firmware from './components/Firmware'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/network" element={<Network/>}/>
        <Route path="/wifi" element={<WiFi/>}/>
        <Route path="/security" element={<Security/>}/>
        <Route path="/about" element={<About />}>
          <Route path="hardware" element={<Hardware />} />
          <Route path="firmware" element={<Firmware />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
