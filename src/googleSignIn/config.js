import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnumGJbD5_vrFpgmw78VvfY-01e4Jij8U",
  authDomain: "movie-booking-28d5d.firebaseapp.com",
  projectId: "movie-booking-28d5d",
  storageBucket: "movie-booking-28d5d.appspot.com",
  messagingSenderId: "616938452909",
  appId: "1:616938452909:web:c5f552f60996dd4b5b9324",
  measurementId: "G-E3B3KL6522",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
