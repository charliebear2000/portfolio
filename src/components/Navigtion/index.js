import React, { useEffect } from 'react'

function Navigation(props) {
   return (

      <nav className="nav-links">
         <p className="link" id="about-me">About Me</p>
         <p className="link" id="portfolio">Portfolio</p>
         <p className="link" id="contact">Contact</p>
         <p className="link" id="resume">Resume</p>
      </nav>
   );
}

export default Navigation;