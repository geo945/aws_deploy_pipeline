import fs from 'fs'
import admin from 'firebase-admin'
import { initializeApp } from "firebase/app";

const rawCredentials = fs.readFileSync('key.json');
const jsonCredentials = JSON.parse(rawCredentials);

let fireStoreInstance = null

const DatabaseService = {
    initializeFireStoreInstance: () => {
        admin.initializeApp({
            credential: admin.credential.cert(jsonCredentials),
            storageBucket: jsonCredentials.storageBucket
        })
        initializeApp(jsonCredentials)
    },
    getFirestoreInstance: () => {
        if(!fireStoreInstance) {
            fireStoreInstance = admin.firestore()
        }

        return fireStoreInstance
    }
}

export default DatabaseService