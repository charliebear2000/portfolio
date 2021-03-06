import React from 'react'

function Navigation(props) {

   const {
      currentPage,
      setCurrentPage
   } = props;

   return (

      <nav className="nav-links">
         <p className={`link ${'About Me' === currentPage && 'nav-active'}`} id="about-me">
            <span className="nav-link" onClick={() => setCurrentPage('About Me')}>About Me</span>
         </p>
         <p className={`link ${'Portfolio' === currentPage && 'nav-active'}`} id="portfolio">
            <span className="nav-link" onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
         </p>
         <p className={`link ${'Resume' === currentPage && 'nav-active'}`} id="resume">
            <span className="nav-link" onClick={() => setCurrentPage('Resume')}>Resume</span>
         </p>
      </nav>
   );
}

export default Navigation;
