import * as firebase from "@react-native-firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDzU1pEzspfvWOVer56Hp1a2g8Z52loiBM",
  authDomain: "storyhub-b5c2e.firebaseapp.com",
  projectId: "storyhub-b5c2e",
  storageBucket: "storyhub-b5c2e.appspot.com",
  messagingSenderId: "576882360895",
  appId: "1:576882360895:web:8b49ad6ed87dfcc96f6e8a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
