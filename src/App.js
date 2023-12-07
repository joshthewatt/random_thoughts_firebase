import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState, useEffect, createContext, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import PostWall from './components/PostWall';
import SignIn from'./components/SignIn';

const firebaseConfig = {
  apiKey: "AIzaSyDqlP72zNcUkYhYmXjyZMgKcJA3RSUlgtM",
  authDomain: "random-thoughts-596dc.firebaseapp.com",
  projectId: "random-thoughts-596dc",
  storageBucket: "random-thoughts-596dc.appspot.com",
  messagingSenderId: "800129944017",
  appId: "1:800129944017:web:f6a14d3df60512c199b8f0",
  measurementId: "G-HRP3PH3YT4"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

// Initialize Firebase

//const analytics = getAnalytics(app);
function App() {
  const [user, error] = useAuthState(auth);
  return (
    <div className="App">

        {user ? <PostWall /> : <SignIn />}

    </div>
  );
}

export default App;
