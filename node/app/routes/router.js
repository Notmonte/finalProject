// Import express and get Router object

const express = require('express')  
const router = express.Router()

const port = process.env.port || 3005  // Create port 

router.get('/api', (req, res)=> {
    res.json({
        "All Pc's": `http://localhost:${port}/api/pc`
    })
})

router.use('/api/pc', require('./api/pcRoutes'))


// Error page
router.get('*', (req, res)=> {
    if(req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error. This page does not exists.</h1>')
    }
})


// Export router
module.exports = router