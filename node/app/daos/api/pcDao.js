const con = require('../../config/dbConfig')
// const { findAll } = require('../common/daoCommon')


const pcDao = {
    table: 'pc',


    create: (req, res, table)=> {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)
            
            con.execute(
                `INSERT INTO ${table} 
                SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR:', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },
    
    // update: (req, res, table)=> {
    //     if (isNaN(req.params.id)) {
    //         res.json({
    //             "error": true,
    //             "message": "Id must be a number"
    //         })
    //     } else if (Object.keys(req.body).length === 0) {
    //         res.json({
    //             "error": true,
    //             "message": "No fields to update"
    //         })
    //     } else {
    //         const fields = Object.keys(req.body)
    //         const values = Object.values(req.body)
            
    //         con.execute(
    //             `UPDATE ${this.table}
    //                 SET ${fields.join(' = ?, ')} = ? WHERE ${table}_id = ?;`,
    //                 [...values, req.params.id],
    //                 (error, dbres)=> {
    //                     if (!error) {
    //                         res.send(`Changed ${dbres.changedRows} row(s)`)
    //                     } else {
    //                         console.log('DAO ERROR', error)
    //                         res.send('Error creating record')
    //                     }
    //                 }
    //             )
    //         }
    //     },

        sort: (res, table)=> {
            con.execute(
                `SELECT * FROM ${table} ORDER BY pc,`,
                    (error, rows)=> {
                        if (!error) {
                            if (rows.length == 1) {
                                res.json(...rows)
                            } else {
                                res.json(rows)
                            }
                        } else {
                            console.log('DAO ERROR', error)
                        }
                    }
            )
        }
    }

module.exports = pcDao