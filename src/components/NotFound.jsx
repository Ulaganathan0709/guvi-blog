import React from 'react';
import './NotFound.css'; // Import the CSS file

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h2>404 - Page Not Found</h2>
      <p>
        Oops! The page you are looking for does not exist. Please check the URL or go back to the home page.
      </p>
    </div>
  );
};

export default NotFound;
