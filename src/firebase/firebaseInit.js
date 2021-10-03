import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC6FbuoWgQa3ytJ5wW67lmUBMTcdYIqP7s",
  authDomain: "invoice-app-1e0b1.firebaseapp.com",
  projectId: "invoice-app-1e0b1",
  storageBucket: "invoice-app-1e0b1.appspot.com",
  messagingSenderId: "766407536315",
  appId: "1:766407536315:web:c26c604976fd50c5b2839e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
