require('dotenv').config()
const express = require('express')
require('./config/db')

const cors = require('cors')
const userRoute = require('./router/userRoute')
const projectRoute = require('./router/projectRoute')
const quoteRoute = require('./router/quoteRoute')
const ReplyRoute = require('./router/replyRoute')
const workRoute = require('./router/workRoute')
const workdoneRoute = require('./router/workdoneRoute')
const contractor = require('./router/contractorRoute')
const rating = require('./router/ratingRoute')

const houseServer = express()

houseServer.use(cors())
houseServer.use(express.json())
houseServer.use(userRoute)
houseServer.use(projectRoute)
//houseServer.use('/uploads',express.static('./uploads'))
houseServer.use('/uploads',express.static('./uploads', {setHeaders: (res) => {res.setHeader('Access-Control-Allow-Origin', '*');},}));
houseServer.use(quoteRoute)
houseServer.use(ReplyRoute)
houseServer.use(workRoute)
houseServer.use(workdoneRoute)
houseServer.use(contractor)
houseServer.use(rating)

const PORT = 3000 || process.env.PORT

houseServer.get('/',(req,res)=>{
    res.send("House server Satrted...")
})

houseServer.listen(PORT,()=>{
    console.log("House construction server running on the port "+PORT);
})