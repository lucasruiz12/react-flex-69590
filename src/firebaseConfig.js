import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq5abOvyrfXK-FVWeq9x3ELtaCvVkmT3M",
  authDomain: "react-flex-69590.firebaseapp.com",
  projectId: "react-flex-69590",
  storageBucket: "react-flex-69590.firebasestorage.app",
  messagingSenderId: "317586119948",
  appId: "1:317586119948:web:718258bf1a9159f14fbd29"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);