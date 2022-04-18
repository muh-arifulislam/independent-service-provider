// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS_l8fJKMdD8-1enniwbbZH-st3-9-HhE",
    authDomain: "independent-service-prov-e7373.firebaseapp.com",
    projectId: "independent-service-prov-e7373",
    storageBucket: "independent-service-prov-e7373.appspot.com",
    messagingSenderId: "709178427755",
    appId: "1:709178427755:web:0930178834f1098e19242e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;