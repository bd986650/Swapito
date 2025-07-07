import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDyY5BTIszHTT87fAewU5Go7i0TR-tCjGQ",
    authDomain: "swapito-5c162.firebaseapp.com",
    projectId: "swapito-5c162",
    storageBucket: "swapito-5c162.firebasestorage.app",
    messagingSenderId: "1013595719463",
    appId: "1:1013595719463:web:0b2aa878db8ddcd16a4b02",
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)
export const db = getFirestore(app)
