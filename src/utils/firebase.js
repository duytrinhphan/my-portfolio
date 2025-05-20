import firebase from 'firebase';

// Your web app's Firebase configuration
// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-4zz7Tlu9djO64PHiwBocteVYq9-idsY",
    authDomain: "portfolio-contact-d9fad.firebaseapp.com",
    projectId: "portfolio-contact-d9fad",
    storageBucket: "portfolio-contact-d9fad.appspot.com",
    messagingSenderId: "655017726069",
    appId: "1:655017726069:web:ece0492bb8bf774fd7283c"
});

const db = firebaseApp.firestore();

export default db;