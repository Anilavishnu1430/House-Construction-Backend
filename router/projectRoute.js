//1 import express
const express = require('express')

//4 import userController
const projectController = require('../Controllers/projectController')

const adminJwtMiddleware = require('../middlewares/adminJwtMiddleware')

const multerMiddleware = require('../middlewares/multerMiddleware')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

//2 Route define
const projectRoute = express.Router()

//5 AddProject - endpoints define
projectRoute.post('/api/addProject',adminJwtMiddleware,multerMiddleware.array('uploadedImages',3),projectController.addProject)

// ViewProject - endpoints define
projectRoute.get('/api/viewProjects',jwtMiddleware,projectController.viewProject)

// Get A Project - endpoints define
projectRoute.get('/api/getAProject/:id',jwtMiddleware,projectController.getAProject)

// makepayment - endpoints define
projectRoute.post('/api/makepayment',jwtMiddleware,projectController.makePayment)

//3 export route
module.exports = projectRoute