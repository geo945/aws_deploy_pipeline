import FirebaseStorageService from "../service/storage.js";
import admin from 'firebase-admin'
import { ref, uploadString, getDownloadURL } from "firebase/storage";

const storageRepository = {
    postImages: async (id, image) => {
        const storage = FirebaseStorageService.getStorageInstance()

        const storageRef = ref(storage, `files/${id}`)

        await uploadString(storageRef, image, 'base64')
    },
    getImageById: async (id) => {
        try {
            const file =  admin.storage().bucket().file(`files/${id}`)

            const data = await file.download();
            const contents = data[0];

            const base64Image = contents.toString('base64');

            return base64Image
        } catch (e) {
            console.error(e)
        }
    }
}

export default storageRepository