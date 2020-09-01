import * as firebase from "firebase"

require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPN2TyV9ldFOotkO5tO4Y4cy_ZivZUwxs",
  authDomain: "bedstories-4fda3.firebaseapp.com",
  databaseURL: "https://bedstories-4fda3.firebaseio.com",
  projectId: "bedstories-4fda3",
  storageBucket: "bedstories-4fda3.appspot.com",
  messagingSenderId: "985630966508",
  appId: "1:985630966508:web:78072b5c4437ac15509bc9",
  measurementId: "G-31FM8ZHZ59"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.firestore();