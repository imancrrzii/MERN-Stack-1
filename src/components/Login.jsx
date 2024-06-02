import React from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user)
      }).catch((error) => {
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button className="bg-blue px-8 rounded py-2 text-white" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default login;
