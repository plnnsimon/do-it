import firebase from "firebase";
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBox4veLiHWTJCvClORokq946IMkVnMYh0",
    authDomain: "do-it-b1370.firebaseapp.com",
    projectId: "do-it-b1370",
    storageBucket: "do-it-b1370.appspot.com",
    messagingSenderId: "900050670378",
    appId: "1:900050670378:web:11a8711e11271aea658453",
    measurementId: "G-XX2N4Z0ED8"
};

let app = null;

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
    console.log(app);
}

export default firebase;