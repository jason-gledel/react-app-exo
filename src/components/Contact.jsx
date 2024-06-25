// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = ({ name, profileImage, isConnected }) => {
  return (
    <div className="contact">
      <div className="profile-container">
        <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
        <span className={`status ${isConnected ? 'connected' : 'disconnected'}`}></span>
      </div>
      <div className="contact-info">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Contact;
