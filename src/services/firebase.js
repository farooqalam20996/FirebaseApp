import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDr_km2IboLlch1aiPh6tu8T4lj68rAm0A",
    authDomain: "gravity-61504.firebaseapp.com",
    projectId: "gravity-61504",
    storageBucket: "gravity-61504.appspot.com",
    messagingSenderId: "138079805330",
    appId: "1:138079805330:web:0f62d0ccb111d13c8a6b4b"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const handleSignUp = async (email, password) => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log(firebase.auth().currentUser);
            const user = firebase.auth().currentUser;
        })
        .catch((error) => {
            console.error(error);
        });
};

export const handleSignIn = async (email, password) => {
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log(firebase.auth().currentUser);
        })
        .catch((error) => {
            console.error(error);
        });
};