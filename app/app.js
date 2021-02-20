if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

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

  var firestore = firebase.firestore();
//   const docRef = firestore.doc("Blog/Post");
//   const outputHeader = document.querySelector("#hotDogOutput");
//   const inputTextField = document.querySelector("#latestHotDogStatus");
//   const saveButton = document.querySelector("#saveButton");

//   saveButton.addEventListener("click", function(){
//       const textToSave = inputTextField.value;
//       console.log("I am goint to save " + textToSave + " to Firebase");
//         docRef.set({
//             hotDogStatus: textToSave
//         }).then(function(){
//             console.log("Status saved!");
//         }).catch(function(error){
//          console.log("Got an error", error);   
//         })
//     })

  


