const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    const listingToAdd = req.body;
    const query = `INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path")
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [listingToAdd.cost, listingToAdd.sqft, listingToAdd.type, listingToAdd.city, listingToAdd.image_path])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with POST', error);
        res.sendStatus(500);
    });// end POST
});

router.get('/rentals', (req, res) => {
    const query = `SELECT * FROM "listings" WHERE "type" = 'rent';`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making GET', error);
        res.sendStatus(500);
    });
});

router.get('/sales', (req, res) => {
    const query = `SELECT * FROM "listings" WHERE "type" = 'sale';`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making GET', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    const query = 'DELETE FROM "listings" WHERE "id" = $1;';
    pool.query(query, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.send(500);
    })
});

module.exports = router;