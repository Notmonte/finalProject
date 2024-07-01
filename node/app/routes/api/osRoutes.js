const express = require('express')
const router = express.Router()

// const dao = require('../../daos/api/osDao')

const { osDao: dao } = require('../../daos/dao')

// Routes export to => router
// Router gets the path and if recived, the callback function is invoked

router.get('/', (req, res)=> {  
    dao.findAll(res, dao.table)
})

router.get('/sort', (req, res)=> {
    dao.sort(req, res, dao.table)
})

// router.get('/:id', (req, res)=> {
//     dao.findById(req, res,)
// })

router.post('/create', (req, res)=> {
    dao.create(req, res)
})


module.exports = router