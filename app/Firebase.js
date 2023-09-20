// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsfxp3FW6onkIyRocy_iF863FESjBsE_c",
  authDomain: "zimo-social.firebaseapp.com",
  projectId: "zimo-social",
  storageBucket: "zimo-social.appspot.com",
  messagingSenderId: "314328801583",
  appId: "1:314328801583:web:22e74a4cba94a212c0c1da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
