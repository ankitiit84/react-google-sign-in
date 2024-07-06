import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMDowHoG1ckdRJNoPJHnvyfEITwr2q8y0",
    authDomain: "playground-426904.firebaseapp.com",
    projectId: "playground-426904",
    storageBucket: "playground-426904.appspot.com",
    messagingSenderId: "1064131355987",
    appId: "1:1064131355987:web:3bea9a428a6c6852b1ada6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("name", result.user.displayName);
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("profilePic", result.user.photoURL);
    }).catch((error) => {
        console.log(error);
    })
}

export const signOutWithGoogle = () => {
    signOut(auth).then(() => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("profilePic");
    })
}

