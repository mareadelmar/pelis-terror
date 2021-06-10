import firebase from "firebase";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCVWAZhLmq5ZPcYeVDji260pYtQNSkxkHM",
    authDomain: "pelis-terror.firebaseapp.com",
    projectId: "pelis-terror",
    storageBucket: "pelis-terror.appspot.com",
    messagingSenderId: "431349720059",
    appId: "1:431349720059:web:438b3b661d87049720a15e",
};
// Initialize Firebase
const firebaseConfig = firebase.initializeApp(config);

const auth = firebaseConfig.auth();
export { auth };
