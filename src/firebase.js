
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";




export const config = {
    apiKey: "AIzaSyDuWYdKBDeLZuxUo7ov_jx2UjeMTSIhc9U",
    authDomain: "daydreams-40f3f.firebaseapp.com",
    projectId: "daydreams-40f3f",
    storageBucket: "daydreams-40f3f.appspot.com",
    messagingSenderId: "830342415517",
    appId: "1:830342415517:web:8edef4772d05c496778074",
    measurementId: "G-WGK8NQK42E"  
};


const app = initializeApp(config);
const analytics = getAnalytics(app);

export {analytics}; 