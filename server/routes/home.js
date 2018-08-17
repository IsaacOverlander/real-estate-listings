const express = require('express');
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool;
const config = {
    database: 'real-estate',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('Connected to postgreSQL');
});
pool.on('error', () => {
    console.log('Error connecting to postgreSQL');
});

router.post('/', (req, res) => {
    console.log('in POST route');
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