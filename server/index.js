const express = require('express');
const app = express();
const port = 3000;
const bp = require('body-parser');
const db = require('../database');

app.use(express.static('public'));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// app.get('/routes', function (req, res) {

// });

app.listen(3000, function() {
  console.log(`App listening on port ${port} !`);
});
