//1 import express
const express = require('express')

//4 import userController
const replyController = require('../Controllers/replyController')

const adminJwtMiddleware = require('../middlewares/adminJwtMiddleware')

const jwtMiddleware = require('../middlewares/jwtMiddleware')

//2 Route define
const replyRoute = express.Router()

//5 Add Quote - endpoints define
replyRoute.post('/api/addReply',adminJwtMiddleware,replyController.addReply)

// ViewReply - endpoints define
replyRoute.get('/api/viewReply',jwtMiddleware,replyController.viewReply)


//3 export route
module.exports = replyRoute