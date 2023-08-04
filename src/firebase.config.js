
import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBr4M5NmqsKOiQ1H4U5eial1TVPUnIxpCg",
    authDomain: "restaurantapp-8a8c4.firebaseapp.com",
    databaseURL: "https://restaurantapp-8a8c4-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-8a8c4",
    storageBucket: "restaurantapp-8a8c4.appspot.com",
    messagingSenderId: "1028197544492",
    appId: "1:1028197544492:web:6e557236b0a32e9c5d1789"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};