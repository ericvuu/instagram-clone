import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBS0I-Lc2XztQ6uwpVrwOA0nBAPjEgaVq0",
  authDomain: "instagram-clone-3f65c.firebaseapp.com",
  projectId: "instagram-clone-3f65c",
  storageBucket: "instagram-clone-3f65c.appspot.com",
  messagingSenderId: "42832752095",
  appId: "1:42832752095:web:ba2ae0c039129589c9e86a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp };
