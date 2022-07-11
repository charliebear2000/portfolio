import React from 'react';
import Footer from '../Footer';

function Projects() {

   return (
      <>
         <h1 className="project-header">Portfolio</h1>
         <div className="top-container">Click on each image to go to the live website. Click on the title of each project to go to the GitHub website.</div>
         <div className="project-container">
            <div className="inner-project-container">
               <div className="project-item">
                  <a className="project" id="project-1" href="https://ckoehler16.github.io/Cocktail-Generator/">
                  </a>
                  <a className="project-link" href="https://github.com/ckoehler16/Cocktail-Generator">
                     Flute and Fork &emsp;<img className="icon" src="https://img.icons8.com/metro/26/000000/github.png" alt=""/>
                  </a>
               </div>

               <div className="project-item">
                  <a className="project" id="project-2" href="https://shrouded-gorge-64455.herokuapp.com/">
                  </a>
                  <a className="project-link" href="https://github.com/charliebear2000/Food-andDrink-DB">
                     The Recipe Pantry &emsp;<img src="https://img.icons8.com/metro/26/000000/github.png" alt=""/>
                  </a>
               </div>

               <div className="project-item">
                  <a className="project" id="project-3" href="https://salty-cove-18833.herokuapp.com/">
                  </a>
                  <a className="project-link" href="https://github.com/charliebear2000/budget-tracker">
                     Budget Tracker &emsp;<img src="https://img.icons8.com/metro/26/000000/github.png" alt=""/>
                  </a>
               </div>

               <div className="project-item">
                  <a className="project" id="project-4" href="https://charliebear2000.github.io/java-quiz/">
                  </a>
                  <a className="project-link" href="https://github.com/charliebear2000/java-quiz">
                     JavaScript Quiz &emsp;<img src="https://img.icons8.com/metro/26/000000/github.png" alt=""/>
                  </a>
               </div>

               <div className="project-item">
                  <a className="project" id="project-5" href="https://limitless-everglades-40036.herokuapp.com/">
                  </a>
                  <a className="project-link" href="https://github.com/charliebear2000/Note-Taker">
                     Note-Taker &emsp;<img src="https://img.icons8.com/metro/26/000000/github.png" alt=""/>
                  </a>
               </div>

               <div className="project-item">
                  <a className="project" id="project-6" href="https://charliebear2000.github.io/workday-scheduler/">
                  </a>
                  <a className="project-link" href="https://github.com/charliebear2000/workday-scheduler">
                     Workday Scheduler &emsp;<img src="https://img.icons8.com/metro/26/000000/github.png" alt=""/>
                  </a>
               </div>

            </div>
         </div>
         <Footer/>
      </>
   )
};

export default Projects;