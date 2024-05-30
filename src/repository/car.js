import DatabaseService from '../service/database.js'

const carRepository = {
    postCar: (body) => {
        const fireStoreInstance = DatabaseService.getFirestoreInstance()

        return fireStoreInstance.collection('posts').add(body)
    },
    getCarPosts: async (filters) => {
        const fireStoreInstance = DatabaseService.getFirestoreInstance()

        let carPostsRef = fireStoreInstance.collection('posts')

        if (filters.brand) {
            carPostsRef = carPostsRef.where('brand', '==', filters.brand)
        }

        if (filters.carModel) {
            carPostsRef = carPostsRef.where('carModel', '==', filters.carModel)
        }

        if (filters.bodyType) {
            carPostsRef = carPostsRef.where('bodyType', '==', filters.bodyType)
        }

        if (filters.price) {
            carPostsRef = carPostsRef.where('price', '<=', Number(filters.price))
        }

        if (filters.year) {
            carPostsRef = carPostsRef.where('productionYear', '>=', Number(filters.year))
        }

        if (filters.fuelType) {
            carPostsRef = carPostsRef.where('fuelType', '==', filters.fuelType)
        }

        if (filters.km) {
            carPostsRef = carPostsRef.where('km', '<=', Number(filters.km))
        }

        if (filters.status) {
            carPostsRef = carPostsRef.where('status', '==', filters.status)
        }

        const snapshot = await carPostsRef.get()

        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }

        const response = []
        snapshot.forEach(doc => {
            response.push({...doc.data(), documentId: doc.id})
        });

        return response
    },
    updateCarPost: async (id, newPayload) => {
        const fireStoreInstance = DatabaseService.getFirestoreInstance()

        return fireStoreInstance.collection('posts').doc(id).update(newPayload)
    },
    deleteCarPost: async (id) => {
        const fireStoreInstance = DatabaseService.getFirestoreInstance()

        return fireStoreInstance.collection('posts').doc(id).delete()
    },
    getCarPostById: async (id) => {
        try {
            const fireStoreInstance = DatabaseService.getFirestoreInstance()

            let carPostsRef = fireStoreInstance.collection('posts')

            carPostsRef= carPostsRef.where('id', '==', id)

            const snapshot = await carPostsRef.get()

            const response = []
            snapshot.forEach(doc => {
                response.push(doc.data())
            });

            return response[0]
        } catch (e){
            console.error(e)
        }
    }
}

export default carRepository