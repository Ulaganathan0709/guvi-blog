import React from 'react';
import dataScienceImage from '../assets/datascience.jpg';
import './Course.css'; // Import the CSS file

const DataScience = () => {
  return (
    <div className="course-detail-container">
      <h2>Data Science</h2>
      <img src={dataScienceImage} alt="Data Science" className="course-detail-image" />
      <p>
        The Data Science course provides comprehensive knowledge on data analysis and machine learning. Topics include:
      </p>
      <ul>
        <li>Data collection and cleaning</li>
        <li>Exploratory data analysis</li>
        <li>Statistical analysis and modeling</li>
        <li>Machine learning algorithms</li>
        <li>Data visualization techniques</li>
        <li>Tools like Python, R, and TensorFlow</li>
      </ul>
    </div>
  );
};

export default DataScience;
