// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId*/
  apiKey: "AIzaSyDD91lswfFcYAMb2wMHYjGHqJmYvtvh2Es",
  authDomain: "personalproject-58c5c.firebaseapp.com",
  projectId: "personalproject-58c5c",
  storageBucket: "personalproject-58c5c.appspot.com",
  messagingSenderId: "959657857748",
  appId: "1:959657857748:web:6e122815b2a7c57021e141",
  measurementId: "G-838B8EK2QK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export {db, analytics}