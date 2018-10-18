const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const query = `SELECT * FROM item;`
    pool.query(query)
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log('ERROR',error);
        res.sendStatus(500);
    })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    const query = `INSERT INTO item("description", "image_url", "person_id")VALUES($1, $2, $3);`;
    pool.query(query, [req.body.description, req.body.image_url, req.body.person_id]).then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error making POST to database: ', error);
    });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "item" WHERE "id"=$1;`
    pool.query(query, [req.params.id])
    .then(() => 
        res.sendStatus(200))
    .catch(error => {
        console.log('ERROR:', error);
    })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
    pool.query(`UPDATE item
                SET description=$1, image_url=$2
                WHERE id=$3;`, [req.body.description, req.body.image_url, req.params.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error making update ', error);
            res.sendStatus(500);
        });
});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
    const query = 
        `SELECT "person"."username", COUNT("item")
        FROM "person"
        LEFT JOIN "item"
        ON "person"."id" = "person_id"
        GROUP BY "person"."id";`
    pool.query(query)
    .then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log('Error:', error);
        res.sendStatus(500);
    })
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;