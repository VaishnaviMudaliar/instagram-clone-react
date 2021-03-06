import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import {db,auth} from './firebase'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Input} from '@material-ui/core';
import imageupload from './imageupload';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts,setPosts] = useState([]);
  const[open,setOpen]=useState(false);
  const[openSignIn,setOpenSignIn]= useState(false);
  const[username,setusername]=useState('');
  const[password,setPassword]=useState('');
  const[email,setEmail]=useState('');
  const[user,setUser]= useState(null);

  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if (authUser) {
        //user has logged in
        console.log(authUser);
        setUser(authUser);

        
      }
      else{
        //user has logged out
        setUser(null);


      }
    })
    return ()=>{
      // perform some cleanup action
      unsubscribe();
    }


  },[user,username])
  

  useEffect(()=>{

    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>({id:doc.id,post: doc=>doc.data()})))
      
    })

  },[]);

  const signUp = (event) => {
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((authUser)=> {
      return authUser.user.updateProfile({
        displayName:username
      })
    })
    .catch((error)=>alert(error.message));
    setOpen(false);

  }

  const signIn =(event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .catch((error)=>alert(error.message));

      setOpenSignIn(false);
  }



  
  return (
    <div className="App">
      <imageupload></imageupload>

      <Modal open={open} onClose={()=>setOpen(false)}>
      
        <div style={modalStyle} className={classes.paper}>
          <form className="App_signup">
              <center>
              <img className="App_header_image"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
            </center>
              <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e)=>setusername(e.target.value)}></Input>
              <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}></Input>

              <Input
                placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}></Input>
              <Button type="submit" onClick={signUp}>Sign Up</Button>  
          </form>
          
         </div>
        
       </Modal>



       
     <Modal
      open={openSignIn}
      onClose={()=>setOpenSignIn(false)}
      >
      
        <div style={modalStyle} className={classes.paper}>
          <form className="App_signup">
            <center>
              <img className="App_header_image"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
            </center>
              
            <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}>

            </Input>

            <Input
                placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}></Input>
              <Button type="submit" onClick={signIn}>Sign In</Button>  
          </form>
          
         </div>
        
       </Modal>
      
      <div className="App_header">
        <img className="App_header_image"
         src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=" "></img>
      </div>

      {user?(
         <Button onClick={()=>auth.signOut()} >LogOut</Button>

      ):(
        <div className="App_login_container">
          <Button onClick={()=>setOpenSignIn(true)} >Sign In</Button>
          <Button onClick={()=>setOpen(true)} >Sign Up</Button>

        </div>
        
        

      )}

      
      {
        posts.map(({id,post}) =>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />))
      }

      
      
    </div>
  );

}

export default App;
