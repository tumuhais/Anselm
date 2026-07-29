import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Helper to resolve environment variables across both Create React App and Vite
const getEnvVar = (reactKey, viteKey, fallback) => {
  if (typeof process !== "undefined" && process.env && process.env[reactKey]) {
    return process.env[reactKey];
  }
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[viteKey]) {
    return import.meta.env[viteKey];
  }
  return fallback;
};

// Firebase Configuration
const firebaseConfig = {
  apiKey: getEnvVar(
    "REACT_APP_FIREBASE_API_KEY",
    "VITE_FIREBASE_API_KEY",
    "AIzaSyBZnkgQQHp0HB_JRjohNEl-4Jrr-FJuj4c"
  ),
  authDomain: getEnvVar(
    "REACT_APP_FIREBASE_AUTH_DOMAIN",
    "VITE_FIREBASE_AUTH_DOMAIN",
    "anselm-portfoliowebsite.firebaseapp.com"
  ),
  projectId: getEnvVar(
    "REACT_APP_FIREBASE_PROJECT_ID",
    "VITE_FIREBASE_PROJECT_ID",
    "anselm-portfoliowebsite"
  ),
  storageBucket: getEnvVar(
    "REACT_APP_FIREBASE_STORAGE_BUCKET",
    "VITE_FIREBASE_STORAGE_BUCKET",
    "anselm-portfoliowebsite.firebasestorage.app"
  ),
  messagingSenderId: getEnvVar(
    "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    "VITE_FIREBASE_MESSAGING_SENDER_ID",
    "655075010341"
  ),
  appId: getEnvVar(
    "REACT_APP_FIREBASE_APP_ID",
    "VITE_FIREBASE_APP_ID",
    "1:655075010341:web:d21a2814f9f624e2945ccc"
  ),
  measurementId: getEnvVar(
    "REACT_APP_FIREBASE_MEASUREMENT_ID",
    "VITE_FIREBASE_MEASUREMENT_ID",
    "G-BET7D9BQC9"
  ),
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Safe Analytics Initialization (prevents crashes during server-side rendering or build steps)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch((err) => console.warn("Analytics not supported in this environment:", err));
}

// Export Firebase services for use across your components
export const db = getFirestore(app);
export const auth = getAuth(app);
export { analytics };
export default app;