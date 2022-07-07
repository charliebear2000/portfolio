import React from 'react';
import Footer from '../Footer';
import resume from '../../assets/resume.pdf';

function Resume() {

   return (
      <section className="resume-container">
         <h1 class="resume-header">Resume</h1>
         <p>Download my resume <a href={resume}>here.</a>
         </p>

         <div>
            <h2>Front-End Proficiencies</h2>
            <p className="bullet-list">
            <span>&#8226;</span>HTML
            <br/>
            <span>&#8226;</span>CSS
            <br/>
            <span>&#8226;</span>JavaScript
            <br/>
            <span>&#8226;</span>JQuery
            <br/>
            <span>&#8226;</span>Bootstrap
            <br/>
            <span>&#8226;</span>React
            <br/>
            </p>

            <h2>Back-End Proficiencies</h2>
            <p className="bullet-list">
            <span>&#8226;</span>Node.js
            <br/>
            <span>&#8226;</span>Express.js
            <br/>
            <span>&#8226;</span>MongoDB
            <br/>
            <span>&#8226;</span>MySQL
            <br/>
            <span>&#8226;</span>Sequelize
            <br/>
            <span>&#8226;</span>Webpack
            <br/>
            <span>&#8226;</span>Handlebars
            <br/>
            <span>&#8226;</span>API's
            </p>
         </div>
         <Footer/>
      </section>
   )
}

export default Resume;