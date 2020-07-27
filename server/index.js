const express = require('express');
const app = express();
const port = 3000;
const bp = require('body-parser');
const db = require('../database');
const data = require('../example-data/route.json');

require('dotenv').config();

app.use(express.static('public'));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/trails', (req, res) => {
  console.log('Fetching data...');
  res.send(data);
});

app.listen(3000, () => {
  console.log(`App listening on port ${port} !`);
});
