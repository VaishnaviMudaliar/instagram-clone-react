import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import {db} from './firebase'

function App() {
  const [posts,setPosts] = useState([
    {
      username:"vaishnavi1311_" ,
      caption:"WOW it works!!",
       imageUrl:"https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"

    },
    
    {
      username:"vaishnavi1311_" ,
      caption:"WOW it works!!",
       imageUrl:"https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"

    }
  ]);

  useEffect(()=>{

  },[posts])
  
  return (
    <div className="App">
      
      <div className="App_header">
        <img className="App_header_image"
         src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
      </div>
      {
        posts.map(post =>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />))
      }

      
      
    </div>
  );

}

export default App;
