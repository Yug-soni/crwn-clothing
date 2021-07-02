import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCIks0pybEi0VST16MhK6lCHjHNSCKCXrI",
  authDomain: "crwn-db-20350.firebaseapp.com",
  projectId: "crwn-db-20350",
  storageBucket: "crwn-db-20350.appspot.com",
  messagingSenderId: "716969299157",
  appId: "1:716969299157:web:5422781dbd3353a5b7665c",
  measurementId: "G-FTSLDJYSQ7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists) {
    // create the user in the firestore.
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating the user :- ${error}`);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
