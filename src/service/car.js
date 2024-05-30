import CarRepository from '../repository/car.js'
import StorageRepository from '../repository/storage.js'
import {v4} from 'uuid'
import {CAR_POST_STATUS} from "../constants/index.js";


const carService = {
    publishCar: async (req, res) => {
        const {images} = req.body

        const uuidV4 = v4()

        const carJson = {
            id: uuidV4,
            damaged: req.body.damaged,
            imported: req.body.imported,
            vin: req.body.vin,
            km: req.body.km,
            productionYear: req.body.productionYear,
            brand: req.body.brand,
            carModel: req.body.carModel,
            fuelType: req.body.fuelType,
            power: req.body.power,
            engineCapacity: req.body.engineCapacity,
            numberOfDoors: req.body.numberOfDoors,
            gearbox: req.body.gearbox,
            bodyType: req.body.bodyType,
            color: req.body.color,
            shortDescription: req.body.shortDescription,
            description: req.body.description,
            price: req.body.price,
            currency: req.body.currency,
            sellerName: req.body.sellerName,
            sellerCity: req.body.sellerCity,
            sellerPhone: req.body.sellerPhone,
            status: CAR_POST_STATUS.PENDING
        }

        try {
            const response=  await CarRepository.postCar(carJson)

            for(const image of images) {
                await StorageRepository.postImages(uuidV4, image)
            }

            res.status(200).send(response)
        } catch (e){
            res.status(500).send(e)
            console.log(e)
        }
    },
    getCarPosts: async (req, res) => {
        const filters = {
            brand: req.query?.brand,
            carModel: req.query?.carModel,
            bodyType: req.query?.bodyType,
            price: req.query?.price,
            year: req.query?.year,
            fuelType: req.query?.fuelType,
            km: req.query?.km,
            status: req.query?.status,
        }

        try {
            const response = await CarRepository.getCarPosts(filters)

            const formattedResponse = []
            if(response?.length > 0) {
                for(const post of response) {
                    const image = await StorageRepository.getImageById(post.id)
                    formattedResponse.push({...post, image })
                }
            }

            res.status(200).send(formattedResponse)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    patchCarPost: async (req, res) => {
        const {id} = req.params
        const newPayload = req.body

        try {
            const response = await CarRepository.updateCarPost(id, newPayload)

            res.status(200).send(response)
        } catch (e) {
            res.status(500).send(e)
        }
    },
    deleteCarPost: async (req, res) => {
        const {id} = req.params

        try {
            const response = await CarRepository.deleteCarPost(id)

            res.status(200).send(response)
        } catch (e) {
            res.status(500).send(e)
        }
    },
    getCarPostById: async (req, res) => {
        const {id} = req.params

        try {
            const response = await CarRepository.getCarPostById(id)

            const images = await StorageRepository.getImageById(id)

            res.status(200).send({...response, images})
        } catch (e){
            res.status(500).send(e)
        }
    }
}

export default carService