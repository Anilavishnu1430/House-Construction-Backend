//1 import express
const express = require('express')

//4 import workController
const workController = require('../Controllers/workController')

const adminJwtMiddleware = require('../middlewares/adminJwtMiddleware')

const contractorMiddleware = require('../middlewares/contractorMiddleware')

//2 Route define
const workRoute = express.Router()

//5 AddProject - endpoints define
workRoute.post('/api/addRequestWork',contractorMiddleware,workController.addRequestWork)

// ViewQuote - endpoints define
workRoute.get('/api/viewRequestWork',adminJwtMiddleware,workController.viewRequestWork)

//Approve a Book
workRoute.put('/api/approveRequest/:id',adminJwtMiddleware,workController.approveRequest)

//Reject a Book
workRoute.put('/api/rejectRequest/:id',adminJwtMiddleware,workController.rejectRequest)

//3 export route
module.exports = workRoute