importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");

const firebaseConfig = {
    apiKey: "AIzaSyC1MZJHTJ-3W6fPHK76N60IdObWoxgG_0o",
    authDomain: "ojusnodeweb.firebaseapp.com",
    projectId: "ojusnodeweb",
    storageBucket: "ojusnodeweb.appspot.com",
    messagingSenderId: "58665415131",
    appId: "1:58665415131:web:e969c6e9fb7aa00e1b77fe",
    measurementId: "G-L0RSX014ME"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = app.firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});