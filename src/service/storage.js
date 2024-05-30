import { getStorage } from "firebase/storage";

let storageInstance = null

const FirebaseStorageService = {
    getStorageInstance: () => {
        if(!storageInstance) {
            storageInstance = getStorage()
        }

        return storageInstance
    }
}

export default FirebaseStorageService