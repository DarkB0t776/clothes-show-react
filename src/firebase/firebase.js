import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDL8CvRi062o1S9tQhZH1-KqIr3Hmi6V7Q",
  authDomain: "clothes-shop-87898.firebaseapp.com",
  databaseURL: "https://clothes-shop-87898.firebaseio.com",
  projectId: "clothes-shop-87898",
  storageBucket: "clothes-shop-87898.appspot.com",
  messagingSenderId: "141785262546",
  appId: "1:141785262546:web:8fa0c4a8655faed2c3800b",
  measurementId: "G-PQSX75EC1E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
