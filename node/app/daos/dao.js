// All routes

const con = require('../config/dbConfig')

const dao = {
    findAll: (req, res)=> {
        con.execute(
            `SELECT * FROM pc;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows) 
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    findById: (req, res, id)=> {
        con.execute(
            `SELECT * FROM pc WHERE pc_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    sort: (req, res)=> {
        con.execute(
            `SELECR * FROM pc ORDER By name;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    create: (req, res)=> {
        console.log(req.body)
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = object.values(req.body)

            con.execute(
                `INSERT INTO pc SET ${fields.join(' = ?, ')} =?;`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.json({
                            Last_id: dbres.insertId
                        })
                    } else {
                        console.log('DAI ERROR: ', error)
                    }
                }
            )
        }
    }
} 

module.exports = dao