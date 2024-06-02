// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFUIUkKc2HH30Qs_RpGqfarutiGMzAO2I",
  authDomain: "mern-job-demo-47071.firebaseapp.com",
  projectId: "mern-job-demo-47071",
  storageBucket: "mern-job-demo-47071.appspot.com",
  messagingSenderId: "65981014326",
  appId: "1:65981014326:web:c7bbb3d76d70cb48e1d397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;