// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = ({ name, profileImage, isConnected }) => {
  return (
    <div className="contact">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <div className="contact-info">
        <p>{name}</p>
        <span className={`status ${isConnected ? 'connected' : 'disconnected'}`}></span>
      </div>
    </div>
  );
};

export default Contact;
