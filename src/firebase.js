// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0OchW4psrBOoshZZQALmcXxvdPydl40g",
  authDomain: "data-fb2f5.firebaseapp.com",
  projectId: "data-fb2f5",
  storageBucket: "data-fb2f5.appspot.com",
  messagingSenderId: "633377260689",
  appId: "1:633377260689:web:2371daaa6f436c9dd86b30",
  measurementId: "G-3Q76K4M1CR",
//   databaseURL:'https://data-fb2f5-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;