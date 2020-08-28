import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import {db} from './firebase'
import Modal from '@material-ui/core/Modal';

function App() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map({id:doc.id,post: doc=>doc.data()}))
      
    })

  },[posts])
  
  return (
    <div className="App">
      <Modal
      open={open}
      onClose={handleClose}
      >
      
      <div style={modalStyle} className={classes.paper}>
      <h2>I am a Modal</h2>
    </div>
        
      </Modal>
      
      <div className="App_header">
        <img className="App_header_image"
         src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
      </div>
      {
        posts.map(({id,post}) =>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />))
      }

      
      
    </div>
  );

}

export default App;
