//1 import express
const express = require('express')

//4 import contractorController
const ratingController = require('../Controllers/ratingController')

const jwtMiddleware = require('../middlewares/jwtMiddleware')

//2 Route define
const ratingRoute = express.Router()

//5 add Rating - endpoints define
ratingRoute.post('/api/rating',jwtMiddleware,ratingController.addRating)


//3 export route
module.exports = ratingRoute