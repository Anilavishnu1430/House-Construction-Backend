//1 import express
const express = require('express')

//4 import contractorController
const contractorController = require('../Controllers/contractorController')

const adminJwtMiddleware = require('../middlewares/adminJwtMiddleware')

//2 Route define
const contractorRoute = express.Router()

//5 addcontractor - endpoints define
contractorRoute.post('/api/addContractor',adminJwtMiddleware,contractorController.addContractor)

// ViewContractor - endpoints define
contractorRoute.get('/api/viewContractor',adminJwtMiddleware,contractorController.viewContractor)

//contractor Profile Updation - endpoints define
contractorRoute.put('/api/updateContractor/:id',adminJwtMiddleware,contractorController.updateContractor)

//contractor Profile Delete - endpoints define
contractorRoute.delete('/api/deleteAcontractor/:id',adminJwtMiddleware,contractorController.deleteAContractor)

//3 export route
module.exports = contractorRoute