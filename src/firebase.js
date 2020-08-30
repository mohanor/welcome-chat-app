import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2Lwgnd6udtRX9Ox9Zkog70WyF4vBmF5A",
    authDomain: "chatapp-4da82.firebaseapp.com",
    databaseURL: "https://chatapp-4da82.firebaseio.com",
    projectId: "chatapp-4da82",
    storageBucket: "chatapp-4da82.appspot.com",
    messagingSenderId: "858673344201",
    appId: "1:858673344201:web:fb23c9eabac011e2792718",
    measurementId: "G-XLRBNN2PF2"
});

const db = firebaseApp.firestore();

export default db;