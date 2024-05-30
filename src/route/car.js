import express from 'express';
import CarService from '../service/car.js'
import Middlewares from '../middleware/check-auth.js'

const router = express.Router();

router.post('/', Middlewares.checkAuth, CarService.publishCar)
router.get('/', CarService.getCarPosts)
router.get('/:id', Middlewares.checkAuth, CarService.getCarPostById)
router.patch('/:id', Middlewares.checkAuth, CarService.patchCarPost)
router.delete('/:id', Middlewares.checkAuth, CarService.deleteCarPost)

export default router;