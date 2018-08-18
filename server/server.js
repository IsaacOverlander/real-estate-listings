const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home.js');
const rentalRouter = require('./routes/rentals.js');

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/home', homeRouter);
app.use('/rentals', rentalRouter);


app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});
