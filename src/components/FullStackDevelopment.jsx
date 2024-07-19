import React from 'react';
import fullstackImage from '../assets/fullstack.jpg';
import './Course.css'; // Import the CSS file

const FullStackDevelopment = () => {
  return (
    <div className="course-detail-container">
      <h2>Full Stack Development</h2>
      <img src={fullstackImage} alt="Full Stack Development" className="course-detail-image" />
      <p>
        The Full Stack Development course covers both front-end and back-end web development. Topics include:
      </p>
      <ul>
        <li>HTML, CSS, and JavaScript</li>
        <li>React.js for front-end development</li>
        <li>Node.js and Express for back-end development</li>
        <li>Database management with MongoDB</li>
        <li>RESTful API development</li>
        <li>Version control with Git and GitHub</li>
      </ul>
    </div>
  );
};

export default FullStackDevelopment;
