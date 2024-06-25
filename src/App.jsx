// src/App.jsx
import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        name="Pierre-Marie" 
        profileImage="https://media.discordapp.net/attachments/1247163298265436271/1255135143547633736/9a23ba7bc5be7b1eb212f3e39dced98d.png?ex=667c0731&is=667ab5b1&hm=d1087e55a061b27bef51f13084623664fdb16cdaf8eb2fc47c6cc4df36586792&=&format=webp&quality=lossless&width=788&height=788" 
        isConnected={true} 
      />
      <Contact 
        name="Jason Gledel" 
        profileImage="https://images.pexels.com/photos/547593/pexels-photo-547593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        isConnected={false} 
      />
    </div>
  );
}

export default App;
