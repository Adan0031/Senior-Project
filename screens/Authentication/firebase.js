// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFHLNy6jSpn_rE_dwEnoFEYP-Cksf_YXw",
    authDomain: "utrgv-food-delivery.firebaseapp.com",
    projectId: "utrgv-food-delivery",
    storageBucket: "utrgv-food-delivery.appspot.com",
    messagingSenderId: "867363923900",
    appId: "1:867363923900:web:6d317a44fa192f496c2db9"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}
const auth = firebase.auth();
export { auth };