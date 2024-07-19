import React from 'react';
import { Link } from 'react-router-dom';
import fullstackImage from '../assets/fullstack.jpg';
import dataScienceImage from '../assets/datascience.jpg';
import cyberSecurityImage from '../assets/cybersecurity.jpg';
import careerImage from '../assets/career.jpg';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="heading">Welcome to USK Institute</h1>
      <h2 className="subheading">All Courses</h2>
      <p className="description">
        Click on the course names below to explore the details and requirements for each course. USK Institute is committed to providing high-quality education and mentorship to students from diverse backgrounds.
      </p>
      <div className="course-container">
        <div className="course">
          <Link to="/fullstack-development">
            <img src={fullstackImage} alt="Full Stack Development" className="course-image" />
            <p>Full Stack Development</p>
          </Link>
        </div>
        <div className="course">
          <Link to="/data-science">
            <img src={dataScienceImage} alt="Data Science" className="course-image" />
            <p>Data Science</p>
          </Link>
        </div>
        <div className="course">
          <Link to="/cyber-security">
            <img src={cyberSecurityImage} alt="Cyber Security" className="course-image" />
            <p>Cyber Security</p>
          </Link>
        </div>
        <div className="course">
          <Link to="/career">
            <img src={careerImage} alt="Career" className="course-image" />
            <p>Career</p>
          </Link>
        </div>
      </div>
      <p className="description">
        For more information about USK Institute, please visit our <Link to="/about">About Us</Link> page.
      </p>
    </div>
  );
};

export default Home;
