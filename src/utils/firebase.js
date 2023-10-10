// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRF0AphR68jQ6uDRC2mmuNd2aplrCDm0M",
  authDomain: "netshow-gpt.firebaseapp.com",
  projectId: "netshow-gpt",
  storageBucket: "netshow-gpt.appspot.com",
  messagingSenderId: "219078252840",
  appId: "1:219078252840:web:ff0881b6a8b96fbddf581d",
  measurementId: "G-MRRNYE59L5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
