import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDCvvjvKKlJQoXcYgFx9aV41GNnAsyGzF8",
  authDomain: "medicalsheet1.firebaseapp.com",
  projectId: "medicalsheet1",
  storageBucket: "medicalsheet1.appspot.com",
  messagingSenderId: "637915669298",
  appId: "1:637915669298:web:9e58b248450148c4762d2b",
  measurementId: "G-6XMETG4Z2V"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
