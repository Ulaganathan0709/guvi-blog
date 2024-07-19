import React from 'react';
import cyberSecurityImage from '../assets/cybersecurity.jpg';
import './Course.css'; // Import the CSS file

const CyberSecurity = () => {
  return (
    <div className="course-detail-container">
      <h2>Cyber Security</h2>
      <img src={cyberSecurityImage} alt="Cyber Security" className="course-detail-image" />
      <p>
        The Cyber Security course focuses on protecting systems and data. Topics include:
      </p>
      <ul>
        <li>Network security</li>
        <li>Encryption and cryptography</li>
        <li>Security protocols</li>
        <li>Ethical hacking and penetration testing</li>
        <li>Incident response and management</li>
        <li>Compliance and risk management</li>
      </ul>
    </div>
  );
};

export default CyberSecurity;
