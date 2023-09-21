import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"
const firebaseConfig = {
	apiKey: "AIzaSyDbxpMRDCW0KlS7Nvyc-PHce7gIci0tYDk",
	authDomain: "licenseplatedetector-71aa0.firebaseapp.com",
	databaseURL: "https://licenseplatedetector-71aa0-default-rtdb.firebaseio.com",
	projectId: "licenseplatedetector-71aa0",
	storageBucket: "licenseplatedetector-71aa0.appspot.com",
	messagingSenderId: "699333422261",
	appId: "1:699333422261:web:5d3315b2b2b61ef36522fc",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const imgDB = getStorage(app)
const txtDB = getFirestore(app)
const db = getDatabase(app)
export { imgDB, txtDB, db }
