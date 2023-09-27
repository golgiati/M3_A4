// Gustavo Olgiati
// app.js

const express = require('express');
const bodyParser = require('body-parser');

const { makeUpperCase } = require('./middleware');
const studentsRouter = require('./routes/studentsRoutes');

const app = express();

app.use(bodyParser.json());
app.use(makeUpperCase);

app.use('/students', studentsRouter);

app.use('/', function(req, res, next) {
    console.log('Request url:' + req.url);
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});