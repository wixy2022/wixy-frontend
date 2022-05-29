
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfps3UJGv6QceOGyWm_g_DCVctZH7391A",
    authDomain: "wixy-w555y.firebaseapp.com",
    projectId: "wixy-w555y",
    storageBucket: "wixy-w555y.appspot.com",
    messagingSenderId: "770347503815",
    appId: "1:770347503815:web:8b8deb92fea25ec6e8eee2",
    measurementId: "G-YVVZF1QH3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)