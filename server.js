const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Test Message"});
});

// listen for requests
app.listen(port, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${port}/`);
});