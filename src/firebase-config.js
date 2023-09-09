import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB1AVCIJ4M7-Str4w59a52GwxeP3GH2LbI",
  authDomain: "bookmark-dashboard-83f3b.firebaseapp.com",
  projectId: "bookmark-dashboard-83f3b",
  storageBucket: "bookmark-dashboard-83f3b.appspot.com",
  messagingSenderId: "320907339707",
  appId: "1:320907339707:web:48cb8b20d724bd4458469e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)