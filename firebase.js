import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyAfAzjnMiy1TUkA4yLHkba3YikTrmJpQ9g",
  authDomain: "deakin-web-app-e0b94.firebaseapp.com",
  projectId: "deakin-web-app-e0b94",
  storageBucket: "deakin-web-app-e0b94.appspot.com",
  messagingSenderId: "948527098660",
  appId: "1:948527098660:web:dc1d84e1cb921d923aa1b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
