import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyC1MZJHTJ-3W6fPHK76N60IdObWoxgG_0o",
    authDomain: "ojusnodeweb.firebaseapp.com",
    projectId: "ojusnodeweb",
    storageBucket: "ojusnodeweb.appspot.com",
    messagingSenderId: "58665415131",
    appId: "1:58665415131:web:e969c6e9fb7aa00e1b77fe",
    measurementId: "G-L0RSX014ME"
  };

  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);
