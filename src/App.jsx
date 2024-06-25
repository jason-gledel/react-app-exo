// src/App.js
import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        name="John Doe" 
        profileImage="https://via.placeholder.com/50" 
        isConnected={true} 
      />
      <Contact 
        name="Jane Smith" 
        profileImage="https://via.placeholder.com/50" 
        isConnected={false} 
      />
      <Contact 
        name="Alice Johnson" 
        profileImage="https://via.placeholder.com/50" 
        isConnected={true} 
      />
    </div>
  );
}

export default App;
