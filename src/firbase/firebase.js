// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyCwKp_EIEc86VqyAtWWyHbXafuMFpDMta0",
  authDomain: "idkk-54cb3.firebaseapp.com",
  projectId: "idkk-54cb3",
  storageBucket: "idkk-54cb3.appspot.com",
  messagingSenderId: "958775194817",
  appId: "1:958775194817:web:15685e03aacffba7719040"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();


  
export function signInWithGoogle ()  {

  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);

      if (name) {
        console.log("hello")
      }
      
    })
    .catch((error) => {
      console.log(error);
    });
};

export const db = getFirestore(app);
