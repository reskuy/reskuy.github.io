// config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Ganti dengan config Firebase kamu
const firebaseConfig = {
    apiKey: "AIzaSyBlccyouywuj9g8euSsPdZBWOet_nmg06E",
    authDomain: "app-lembur-amartha.firebaseapp.com",
    projectId: "app-lembur-amartha",
    storageBucket: "app-lembur-amartha.firebasestorage.app",
    messagingSenderId: "68667078727",
    appId: "1:68667078727:web:08582e9b671529c2ca5962",
    measurementId: "G-TT8ZWMLSSP"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
