import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAS2TXS5bcRAhyUUC54BuXayPOODGvRh3U",
  authDomain: "barter-system-a3f31.firebaseapp.com",
  projectId: "barter-system-a3f31",
  storageBucket: "barter-system-a3f31.appspot.com",
  messagingSenderId: "721091951542",
  appId: "1:721091951542:web:f7e23cb38320ce67d89f17"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();