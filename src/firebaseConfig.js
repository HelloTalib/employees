import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBDmsE22E4IshDIs4jpOSjQqYKoH4hpvrQ",
  authDomain: "vue-with-brad.firebaseapp.com",
  databaseURL: "https://vue-with-brad.firebaseio.com",
  projectId: "vue-with-brad",
  storageBucket: "vue-with-brad.appspot.com",
  messagingSenderId: "323688625231"
};
firebase.initializeApp(config);

const db = firebase.firestore();
export default db;
