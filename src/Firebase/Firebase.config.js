// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO3Cy0MjJVmWTPczSRYGff2xKJYRw9TWI",
  authDomain: "netflix-grand2.firebaseapp.com",
  projectId: "netflix-grand2",
  storageBucket: "netflix-grand2.appspot.com",
  messagingSenderId: "17153537152",
  appId: "1:17153537152:web:f109c024c9c74400826265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app