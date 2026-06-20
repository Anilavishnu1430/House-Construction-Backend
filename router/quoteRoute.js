//1 import express
const express = require('express')

//4 import userController
const quoteController = require('../Controllers/quoteController')

const adminJwtMiddleware = require('../middlewares/adminJwtMiddleware')

const jwtMiddleware = require('../middlewares/jwtMiddleware')

//2 Route define
const quoteRoute = express.Router()

//5 Add Quote - endpoints define
quoteRoute.post('/api/addQuote',jwtMiddleware,quoteController.addQuote)

// ViewQuote - endpoints define
quoteRoute.get('/api/viewQuote',adminJwtMiddleware,quoteController.viewQuote)


//3 export route
module.exports = quoteRoute