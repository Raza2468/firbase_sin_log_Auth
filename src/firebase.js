import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyD9Ajbn4hqRNr35NfOCV9ugx9lAbZK-Dzw",
    authDomain: "auth-development-f84f8.firebaseapp.com",
    projectId: "auth-development-f84f8",
    storageBucket: "auth-development-f84f8.appspot.com",
    messagingSenderId: "891342825500",
    appId: "1:891342825500:web:bbdea2f82c2869d985d7d9"
})

export const auth = app.auth();
export default app

