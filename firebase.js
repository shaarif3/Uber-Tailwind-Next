// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDtNP4ybr_oh9J24jWbSmQuxE6s3A1XoQg',
  authDomain: 'uber-next-live-4f479.firebaseapp.com',
  projectId: 'uber-next-live-4f479',
  storageBucket: 'uber-next-live-4f479.appspot.com',
  messagingSenderId: '752299848027',
  appId: '1:752299848027:web:3cc491863c3530f7cc6a7e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
