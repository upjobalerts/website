const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBP7ZuyIp8hO6P7agzAQjenYpEMO7UvG-Y",
    authDomain: "upjobalerts-web-free-tests.firebaseapp.com",
    projectId: "upjobalerts-web-free-tests",
    storageBucket: "upjobalerts-web-free-tests.appspot.com",
    messagingSenderId: "542067456225",
    appId: "1:542067456225:web:864fe48a93f7f28b485fa0",
    measurementId: "G-TK8QQWC9JQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  
  var db = firebase.firestore();


  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});