//Build Server
// Import express and create port 

const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router') // Import router

const port = process.env.port || 3005


    server.use(helmet()).use(cors())


    server.use(express.json())
    server.use(express.urlencoded({ extended: true }))

    server.use('/', router)


//  Listen for the port
// .listen(PORT, callback function)
    server.listen(port, ()=> (
        console.log(`This ${port} is not going to be the final time...But I'm listening.`)
    ))


