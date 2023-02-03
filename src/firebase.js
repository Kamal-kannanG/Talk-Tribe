import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCWiYSrK9wLbXCj0gTKw--QW7QV343o8Y",
  authDomain: "talk-tribe-app.firebaseapp.com",
  projectId: "talk-tribe-app",
  storageBucket: "talk-tribe-app.appspot.com",
  messagingSenderId: "566333328871",
  appId: "1:566333328871:web:e6d7be3d3d972d5796c142"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth();
export const db = getFirestore();
