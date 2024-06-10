const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')

const PORT  = process.env.PORT || 3005


server.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    // localhost:3000 => router.js
    server.use('/', router)

    server.listen(PORT, ()=> console.log(`This is not going to be the final time...But I'm listening.`))



// security
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOrginResourcePolicy: false,
    crossOrginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true}))