const express = require('express');

const app = express();
const port = 4000;
const bp = require('body-parser');
const db = require('../database');
const data = require('../example-data/route.json');

require('dotenv').config();

app.use(express.static('public'));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.post('/api/trails/save', (req, res) => {
  const trailObj = {
    // id: req.body.id,
    name: req.body.name,
  };
  db.saveTrails(trailObj)
    .then((data) => (res.status(201).send(data)))
    .catch((err) => (res.status(500).send('Error posting data server-idx:29', err)));
});

app.post('/api/trails/add', (req, res) => {
  const trailObj = {
    id: req.body.id,
    name: req.body.name,
    difficulty: req.body.difficulty,
    stars: req.body.stars,
    length: req.body.length,
    ascent: req.body.ascent,
    descent: req.body.descent,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  };
  db.addTrails(trailObj)
    .then((data) => (res.status(201).send(data)))
    .catch((err) => (res.status(500).send('Error posting data server-idx:29', err)));
});


app.get('/trails', (req, res) => {
  console.log('Fetching data...');
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
