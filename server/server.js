const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const api = require('./routes/api');

app.use(bodyParser.json());

app.use('/api', api);

app.get("/", (req, res) => {
    res.send("Welcome home");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
})
