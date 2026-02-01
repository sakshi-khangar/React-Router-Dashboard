import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{padding:"10px",background:"#222"}}>
        <Link to="/home" style={{color:"white", margintop:"10px"}}>Home</Link>
        <Link to="/network" style={{color:"white", margin:"10px"}}>Network</Link>
        <Link to="/WiFi" style={{color:"white", margin:"10px"}}>Wi-Fi</Link>
        <Link to="/security" style={{color:"white", margin:"10px"}}>Security</Link>
        <Link to="/about" style={{color:"white", margin:"10px"}}>About</Link>
    </nav>
  )
}

export default Navbar
