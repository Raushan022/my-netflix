// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5RHZhz0PY7czWNBv6W2eqJHZtsdalm_w",
  authDomain: "mynetflix-1449c.firebaseapp.com",
  projectId: "mynetflix-1449c",
  storageBucket: "mynetflix-1449c.appspot.com",
  messagingSenderId: "371210786624",
  appId: "1:371210786624:web:ff5266c72d7762fe418ca5",
  measurementId: "G-W29DF0RNHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);