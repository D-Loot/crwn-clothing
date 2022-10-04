import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// https://console.firebase.google.com/u/0/project/crwn-clothing-dloot/overview

const firebaseConfig = {
  apiKey: "AIzaSyDthkNWC4zgm3vOP89MUOgVsRqx2E0maEs",
  authDomain: "crwn-clothing-dloot.firebaseapp.com",
  projectId: "crwn-clothing-dloot",
  storageBucket: "crwn-clothing-dloot.appspot.com",
  messagingSenderId: "968258643806",
  appId: "1:968258643806:web:2fc7f803207489239691cf"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);