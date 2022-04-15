// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9gW5N1sWI-Fexr-Z1uE7sw8xjNSnA5oM",
  authDomain: "red-onion-ca650.firebaseapp.com",
  projectId: "red-onion-ca650",
  storageBucket: "red-onion-ca650.appspot.com",
  messagingSenderId: "653278260386",
  appId: "1:653278260386:web:301789bdb3c2560746bbfb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
