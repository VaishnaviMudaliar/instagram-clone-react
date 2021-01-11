import React,{useState,useEffect}  from 'react';
import {Button,Input} from '@material-ui/core';


function imageupload() {
     const [progress, setProgress] = useState(0);
     const [image, setImage] = useState(null);
     const [caption, setCaption] = useState('');  
     
     const handleChange = (e) => {
         if(e.target.files[0]){
             setImage(e.target.files[0]);
         }
     };

     const handleUpload = (e) => {
         
     }


    return (
        <div>
            <input type="text" placeholder="Enter a caption..."  onChange={event=> setCaption(event.target.value)} value={caption}></input>
            <input type="file" onChange={handleChange}></input>
            <Button className="imageupload_button" onClick={handleUpload}>
                Upload
            </Button>
            
        </div>
    )
} 

export default imageupload
