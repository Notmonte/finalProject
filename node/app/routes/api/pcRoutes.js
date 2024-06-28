const express = require('express')
const router = express.Router()

// const dao = require('../../daos/api/osDao')

const { pcDao: dao } = require('../../daos/dao')

// Routes export to => router

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/sort', (req, res)=> {
    dao.sort(req, res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.getInfo(res, dao.table, req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})


module.exports = router