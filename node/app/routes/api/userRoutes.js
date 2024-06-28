const express = require('express')
const router = express.Router()

// const dao = require('../../daos/api/osDao')

const { userDao: dao } = require('../../daos/dao')

// Routes export to => router

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
    dao.create(req, res, dao.table)
})


module.exports = router