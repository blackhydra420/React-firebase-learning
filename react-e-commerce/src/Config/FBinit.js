// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTjF_oEOdzhXubwdCyKzuHYQRYyiiogLQ",
  authDomain: "react-e-commerce-f600e.firebaseapp.com",
  projectId: "react-e-commerce-f600e",
  storageBucket: "react-e-commerce-f600e.appspot.com",
  messagingSenderId: "1019901380307",
  appId: "1:1019901380307:web:4eb2abaa2b854b5c9fb626",
  measurementId: "G-ZRJTT72142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;