// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiRqQwUR9sqaRIMkH9-hsLmIx_Cpo04I8",
  authDomain: "mkt-film-awards.firebaseapp.com",
  projectId: "mkt-film-awards",
  storageBucket: "mkt-film-awards.appspot.com",
  messagingSenderId: "609450883950",
  appId: "1:609450883950:web:6b7317800b597fed7b1f7f",
  measurementId: "G-741DED49M8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const initFirebase = () => {
  return app;
}