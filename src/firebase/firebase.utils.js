import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBezxj2sLhBRMUAE6mKu67M3bZGI0HAB9o",
    authDomain: "crwn-db-e758c.firebaseapp.com",
    databaseURL: "https://crwn-db-e758c.firebaseio.com",
    projectId: "crwn-db-e758c",
    storageBucket: "crwn-db-e758c.appspot.com",
    messagingSenderId: "818262435984",
    appId: "1:818262435984:web:2a195d7267241b4fa0d015",
    measurementId: "G-MXM034KVGS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;