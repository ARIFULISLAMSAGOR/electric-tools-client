// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6BXNh9ZfuGDVimkcWIQNta4oYMj_uRUA",
    authDomain: "electric-tools-client.firebaseapp.com",
    projectId: "electric-tools-client",
    storageBucket: "electric-tools-client.appspot.com",
    messagingSenderId: "869040545433",
    appId: "1:869040545433:web:02744dea48b340f0dd2208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;