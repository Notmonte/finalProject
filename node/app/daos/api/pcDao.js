const con = require('../../config/dbConfig')
// const { findAll } = require('../common/daoCommon')


// Dao's export to => Routes


const pcDao = {
    table: 'pc',

    getInfo: (res, table, id)=> {

        con.execute(
            `SELECT p.pc_id, p.name, p.tower, p.memory, p.primary_storage, p.power_supply, p.price, p.imgUrl, p.category, o.os, pr.processor, v.video_card
            FROM pc p
            JOIN os o USING (os_id)
            JOIN processor pr USING (processor_id)
            JOIN video_card v USING (video_card_id)
            WHERE p.pc_id = ${id}; `,
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
    },


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
                `SELECT * FROM ${table} ORDER BY pc;`,
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