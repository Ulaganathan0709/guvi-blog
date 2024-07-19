import React from 'react';
import careerImage from '../assets/career.jpg';
import './Course.css'; // Import the CSS file

const Career = () => {
  return (
    <div className="course-detail-container">
      <h2>Career</h2>
      <img src={careerImage} alt="Career" className="course-detail-image" />
      <p>
        The Career course helps you prepare for a successful career. Topics include:
      </p>
      <ul>
        <li>Resume writing</li>
        <li>Interview skills</li>
        <li>Career planning and goal setting</li>
        <li>Professional networking</li>
        <li>Workplace communication skills</li>
        <li>Time management and productivity</li>
      </ul>
    </div>
  );
};

export default Career;
