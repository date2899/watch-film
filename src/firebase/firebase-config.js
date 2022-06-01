// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBcQsaE33VR3U1nZfeiIJWx7fVrLLP1yYQ",
	authDomain: "test-d44bb.firebaseapp.com",
	projectId: "test-d44bb",
	storageBucket: "test-d44bb.appspot.com",
	messagingSenderId: "38350465989",
	appId: "1:38350465989:web:88a3e40d7baa65915df9ac",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getFirestore();
