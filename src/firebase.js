import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_AUTH_DOMAIN,
    projectId: process.env.REACT_PROJECT_ID,
    storageBucket: process.env.REACT_STORAGE_BACKET,
    messagingSenderId: process.env.REACT_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_ID,
})

export const auth = app.auth(); 
export default app