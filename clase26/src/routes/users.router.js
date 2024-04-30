//import UsersController from '../controllers/users.controller.js'
import usersController from '../controllers/users.controller.js'

import { Router } from 'express'

//const usersController= new UsersController()

const router = Router()

//routes
router.get('/users', usersController.getAllUsers)
router.post('/users', usersController.createUser)





export default router