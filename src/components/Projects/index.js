import React from 'react';
import Footer from '../Footer';

function Projects() {

   return (
      <>
         <h1 className="portfolio-header" id="portfolio-header">Portfolio</h1>
         <div className="body-top-container" id="instructions">Click on each image to go to the live website.</div>
         <div className="portfolio-container">
            <div className="inner-portfolio-container">
               <div className="portfolio-item">
                  <a className="projects" id="project-1" href="https://github.com/ckoehler16/Cocktail-Generator">
                  </a>
                  <a className="portfolio-link" href="https://ckoehler16.github.io/Cocktail-Generator/">
                     Flute and Fork <br /><img src="https://img.icons8.com/metro/26/000000/github.png" />
                  </a>
               </div>

               <div className="portfolio-item">
                  <a className="projects" id="project-2" href="https://github.com/charliebear2000/Food-andDrink-DB">
                  </a>
                  <a className="portfolio-link" href="https://shrouded-gorge-64455.herokuapp.com/">
                     The Recipe Pantry <br /><img src="https://img.icons8.com/metro/26/000000/github.png" />
                  </a>
               </div>

               <div className="portfolio-item">
                  <a className="projects" id="project-3" href="https://github.com/charliebear2000/budget-tracker">
                  </a>
                  <a className="portfolio-link" href="https://salty-cove-18833.herokuapp.com/">
                     Budget Tracker <br /><img src="https://img.icons8.com/metro/26/000000/github.png" />
                  </a>
               </div>

               <div className="portfolio-item">
                  <a className="projects" id="project-4" href="https://github.com/charliebear2000/java-quiz">
                  </a>
                  <a className="portfolio-link" href="https://charliebear2000.github.io/java-quiz/">
                     JavaScript Quiz <br /><img src="https://img.icons8.com/metro/26/000000/github.png" />
                  </a>
               </div>

               <div className="portfolio-item">
                  <a className="projects" id="project-5" href="https://github.com/charliebear2000/Note-Taker">
                  </a>
                  <a className="portfolio-link" href="https://limitless-everglades-40036.herokuapp.com/">
                     Note Taker <br /><img src="https://img.icons8.com/metro/26/000000/github.png" />
                  </a>
               </div>

               <div className="portfolio-item">
                  <a className="projects" id="project-6" href="https://github.com/charliebear2000/workday-scheduler">
                  </a>
                  <a className="portfolio-link" href="https://charliebear2000.github.io/workday-scheduler/">
                     Workday Scheduler <br /><img src="https://img.icons8.com/metro/26/000000/github.png" />
                  </a>
               </div>

            </div>
         </div>
         <Footer/>
      </>
   )
};

export default Projects;