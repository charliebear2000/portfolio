import React from 'react';
import Footer from '../Footer';
import resume from '../../assets/resume.pdf';

function Resume() {

   return (
      <section className="resume-container">

         <div className="resume-section">
            <p>Download my resume <a id="resume-link" href={resume}>here.</a>
            </p>
         </div>
         <div className="proficiencies">
            <div className="list">
               <h2>Front-End Proficiencies</h2>
               <p className="bullet-list">
                  <span>&#8226;</span>HTML
                  <br />
                  <span>&#8226;</span>CSS
                  <br />
                  <span>&#8226;</span>JavaScript
                  <br />
                  <span>&#8226;</span>JQuery
                  <br />
                  <span>&#8226;</span>Bootstrap
                  <br />
                  <span>&#8226;</span>React
                  <br />
               </p>
            </div>

            <div className="list">
               <h2>Back-End Proficiencies</h2>
               <p className="bullet-list">
                  <span>&#8226;</span>Node.js
                  <br />
                  <span>&#8226;</span>Express.js
                  <br />
                  <span>&#8226;</span>MongoDB
                  <br />
                  <span>&#8226;</span>MySQL
                  <br />
                  <span>&#8226;</span>Sequelize
                  <br />
                  <span>&#8226;</span>Webpack
                  <br />
                  <span>&#8226;</span>Handlebars
                  <br />
                  <span>&#8226;</span>API's
               </p>
            </div>

         </div>
         <Footer />
      </section>
   )
}

export default Resume;