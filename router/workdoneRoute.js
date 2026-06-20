//1 import express
const express = require('express')

//4 import workController
const workdoneController = require('../Controllers/workdoneController')
const multerMiddleware = require('../middlewares/multerMiddleware')

const adminJwtMiddleware = require('../middlewares/adminJwtMiddleware')

const contractorMiddleware = require('../middlewares/contractorMiddleware')

//2 Route define
const workdoneRoute = express.Router()

//5 Add Work - endpoints define
workdoneRoute.post('/api/workdone',contractorMiddleware,multerMiddleware.single('uploadedImage'),workdoneController.addWork)

// View Work History - endpoints define
workdoneRoute.get('/api/viewWorkHistory',contractorMiddleware,workdoneController.viewWorkHistory)

//3 export route
module.exports = workdoneRoute