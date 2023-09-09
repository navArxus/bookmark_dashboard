import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6HcnSEEdg-PNM02ckBmsPLCEwXEmHIwc",
  authDomain: "bookmark-dashboardtry.firebaseapp.com",
  projectId: "bookmark-dashboardtry",
  storageBucket: "bookmark-dashboardtry.appspot.com",
  messagingSenderId: "424060451488",
  appId: "1:424060451488:web:6d418ca661e76a3b6427c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)