import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyBoUpzeiWOq7ups5R-ejnQiT3u8vtEl9l4",
    authDomain: "shop-dddbf.firebaseapp.com",
    databaseURL: "https://shop-dddbf.firebaseio.com",
    projectId: "shop-dddbf",
    storageBucket: "shop-dddbf.appspot.com",
    messagingSenderId: "12842874076",
    appId: "1:12842874076:web:e049243847d6f50f0bf019",
    measurementId: "G-71DJ5WDDJ7"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  export const storage=firebase.storage();

  export default firebase;