import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBRRCCk6x_5EMrMDAbjD577n5tgzz9VRI0",
    authDomain: "barter-system-app-1bc83.firebaseapp.com",
    projectId: "barter-system-app-1bc83",
    storageBucket: "barter-system-app-1bc83.appspot.com",
    messagingSenderId: "829370827418",
    appId: "1:829370827418:web:8a97774a30d10135b99523"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();