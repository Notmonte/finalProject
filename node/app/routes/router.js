// Import express and get Router object

const express = require('express')  
const router = express.Router()

const port = process.env.port || 3005  // Create port 

const tables = [ 'pc', 'os', 'processor', 'user', 'videoCard']

router.get('/api', (req, res)=> {
    res.json({
        "All Pc's": `http://localhost:${port}/api/pc`,
        "All Users": `http://localhost:${port}/api/user`,
        "All Os": `http://localhost:${port}/api/os`,
        "All Processor's": `http://localhost:${port}/api/processor`,
        "All Video Card's": `http://localhost:${port}/api/videoCard`
    })
})


tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

// router.use('/api/pc', require('./api/pcRoutes'))
// router.use('/api/user', require('./api/userRoutes'))
// router.use('/api/os', require('./api/osRoutes'))
// router.use('/api/processor', require('./api/processorRoutes'))
// router.use('/api/videoCard', require('./api/videoCardRoutes'))


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