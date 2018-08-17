const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});
