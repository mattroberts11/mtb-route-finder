const mongoose = require('mongoose');
const Schema = require('./schema');

mongoose.connect('mongodb://localhost/trail', { useNewUrlParser: true, useUnifiedTopology: true });

const Trail = mongoose.model('Trail', Schema);

const addTrails = (addTrailObj) => {
  console.log(
    'addObj= ', addTrailObj,
  );
  const trailObj = {
    id: addTrailObj.id,
    name: addTrailObj.name,
    difficulty: addTrailObj.difficulty,
    stars: addTrailObj.stars,
    length: addTrailObj.length,
    ascent: addTrailObj.ascent,
    descent: addTrailObj.descent,
    longitude: addTrailObj.longitude,
    latitude: addTrailObj.latitude,
  };
  const newTrail = new Trail(trailObj);
  return newTrail.save()
    .then(() => ('Trail added successfully'))
    .catch((err) => console.error('error adding trail to database', err));
};

module.exports = {
  addTrails,
};
