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

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }


  return userRef;

};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  for (const property in objectsToAdd) {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, objectsToAdd[property]);
  }

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    return {
      ...doc.data()
    }
  });
  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection;
    return accum;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
