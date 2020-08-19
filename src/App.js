import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'

function App() {
  return (
    <div className="App">
      
      <div className="App_header">
        <img className="App_header_image"
         src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
      </div>

      <Post />

    </div>
  );
}

export default App;
