// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHAnTiHWiiRI9eXTBFn8jWDKqUAUh-ukM",
  authDomain: "netflixgpt-11ab9.firebaseapp.com",
  projectId: "netflixgpt-11ab9",
  storageBucket: "netflixgpt-11ab9.appspot.com",
  messagingSenderId: "489338164113",
  appId: "1:489338164113:web:eb589608b45109ac9a4030",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
