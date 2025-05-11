// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlvlKdVpwNnXuNksIOfTbTcAplZs7IJEY",
  authDomain: "sekret-85841.firebaseapp.com",
  databaseURL: "https://sekret-85841-default-rtdb.firebaseio.com",
  projectId: "sekret-85841",
  storageBucket: "sekret-85841.firebasestorage.app",
  messagingSenderId: "965251943840",
  appId: "1:965251943840:web:937252654218aa07c168c5",
  measurementId: "G-GLSK4YCET3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);