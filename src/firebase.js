import firebase from "firebase";


  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyB0TszMviimAuQs84eltJWlfyYX9Sjy948",
    authDomain: "instagram-clone-349be.firebaseapp.com",
    databaseURL: "https://instagram-clone-349be.firebaseio.com",
    projectId: "instagram-clone-349be",
    storageBucket: "instagram-clone-349be.appspot.com",
    messagingSenderId: "1022058698717",
    appId: "1:1022058698717:web:53b8c744ee4fff6aa90834",
    measurementId: "G-P3MH02GKR0"

  });

  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export{ db, auth , storage};
