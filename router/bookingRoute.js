// //1 import express
// const express = require('express')

// //4 import userController
// const bookingController = require('../Controllers/bookingController')

// const jwtMiddleware = require('../middlewares/jwtMiddleware')

// //2 Route define
// const bookingRoute = express.Router()

// //5 AddProject - endpoints define
// bookingRoute.post('/api/addbooking',jwtMiddleware,bookingController.addbooking)

// // ViewProject - endpoints define
// bookingRoute.put('/api/makepayment',jwtMiddleware,bookingController.makePayment)

// //3 export route
// module.exports = bookingRoute