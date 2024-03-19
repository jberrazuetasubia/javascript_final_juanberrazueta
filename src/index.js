import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA05uwlkfTQ9jDrEC6Q2FpFa8L6CDma4jw",
  authDomain: "panitafoodjuanberrazueta.firebaseapp.com",
  projectId: "panitafoodjuanberrazueta",
  storageBucket: "panitafoodjuanberrazueta.appspot.com",
  messagingSenderId: "200853891885",
  appId: "1:200853891885:web:b097579811f371dbbf41a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
