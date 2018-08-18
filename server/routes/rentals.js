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

router.get('/', (req, res) => {
    const query = `SELECT * FROM "listings" WHERE "type" = 'rent';`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making GET', error);
        res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {

});

module.exports = router;