import React from 'react';
import Footer from '../Footer';
import image from '../../assets/images/bitmoji.png';

function About() {
   return (
     <section>
       <h1 id="about">About Me</h1>
       <div>
        <img src={image} alt="profile"/>
       </div>
       <p>
       I am an educator with a specific interest in instructional design and curriculum development.  
       I most enjoy creating content for new courses and revamping existing curriculum to better 
       fit the needs of the learner. I am proactive when problems arise and resourceful and persistent 
       in finding the solution. When the pandemic forced education to move online, I very quickly 
       adapted and learned new technologies. I was also able to help my peers navigate the learning 
       management system and other resources to better teach remotely.
      <br/>
      <br/>
      I recently earned a certificate in web development from the University of Richmond with skills 
      in HTML, CSS, JavaScript, and databases such as SQL and MongoDB. I successfully collaborated 
      with a team to create a full stack web application that will store a user's recipes. During that 
      project, I used my leadership skills to help the team divide tasks and to help them troubleshoot 
      problems as they arose. I hope to leverage my teaching skills and the skills I gained in web 
      development to provide a business with superior curriculum and instructional materials that 
      support their client's and/or employee's needs.
       </p>
       
       <Footer/>
     </section>
   );
 }
 
 export default About;