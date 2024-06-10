const express = require('express')
const router = express.Router()

const port = process.env.port || 3005


router.get('*', (req, res)=> {
    if(req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error. This page does not exists.</h1>')
    }
})


module.exports = router