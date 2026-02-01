import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='page'>
      <div className='card'>
        <h2>About Router</h2>
        <div style={{marginBottom:"15px"}}>
          <Link to="Hardware">Hardware</Link>
          <br/>
          <Link to="Firmware">Firmware</Link>
        </div>
        <div style={{ marginTop: "20px" }}>
           <Outlet />
        </div>
      </div>
    </div>
  )
}

export default About
