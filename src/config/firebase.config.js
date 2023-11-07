// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgXz_QCGBHyHzz-NHZ3xrUSpTN4siQno8",
  authDomain: "blog-11-34a4a.firebaseapp.com",
  projectId: "blog-11-34a4a",
  storageBucket: "blog-11-34a4a.appspot.com",
  messagingSenderId: "369395332676",
  appId: "1:369395332676:web:6a2caa6fe4e4edf9052e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);