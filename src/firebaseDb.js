import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAnbfdD8jxVzkbWnjsJbyN_SaWFko3GDxc",
  authDomain: "mulhertechsimsr-6fa94.firebaseapp.com",
  projectId: "mulhertechsimsr-6fa94",
  storageBucket: "mulhertechsimsr-6fa94.appspot.com",
  messagingSenderId: "812292440408",
  appId: "1:812292440408:web:e4b772074f54712300e52d"
};

// Initialize Firebase
const firebaseApp  = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();