import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  
  const [pages] = useState([
    'About me',
    'Portfolio',
    'Contact',
    'Resume'
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <html>
      <Header
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
      <body>
        {currentPage === 'About me' && <About />}
        {currentPage === 'Portfolio' && <Projects />}
        {currentPage === 'Contact' && <Contact />}
        {currentPage === 'Resume' && <Resume />}
      </body>
    </html>
  );
}

export default App;