// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID

};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
var gitHubAuthProvider = new firebase.auth.GithubAuthProvider();

googleAuthProvider.setCustomParameters({
    'prompt': 'select_account'
});


export {firebase, googleAuthProvider, gitHubAuthProvider, database as default };