import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { BrowserRouter } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  
 
);


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCcTESg0v515MWZ0fPq9dine9s7o_YCB_o",
//   authDomain: "opticsproject-df2d7.firebaseapp.com",
//   databaseURL: "https://opticsproject-df2d7-default-rtdb.firebaseio.com",
//   projectId: "opticsproject-df2d7",
//   storageBucket: "opticsproject-df2d7.appspot.com",
//   messagingSenderId: "518230967384",
//   appId: "1:518230967384:web:410f55765f0bd9e4dc362d"
// };

// Initialize Firebase

reportWebVitals();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const dataRef = collection(db, 'students');
// // For example, to use Firestore in your component





// const fetchData = async () => {
//   const querySnapshot = await getDocs(dataRef);
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, ' => ', doc.data());
//   });
// };
