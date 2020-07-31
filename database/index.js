const mongoose = require('mongoose');
const Schema = require('./schema');

mongoose.connect('mongodb+srv://mattrob:matt5477@cluster0.elyw9.mongodb.net/trail?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  try {
    console.log('connected to atlas');
  } catch (error) {
    console.log('could not connect to atlas');
  }
});

const Trail = mongoose.model('Trail', Schema);

const saveTrails = (trailObj) => {
  console.log(
    'addObj= ', trailObj,
  );
  const newTrail = new Trail.SaveTrailSchema(trailObj);
  return newTrail.save()
    .then(() => ('Trail added successfully'))
    .catch((err) => console.error('error adding trail to database db:idx 21', err));
};

const addTrails = (addTrailObj) => {
  console.log(
    'addObj= ', addTrailObj,
  );
  const newTrail = new Trail.TrailSchema(addTrailObj);
  return newTrail.save()
    .then(() => ('Trail added successfully'))
    .catch((err) => console.error('error adding trail to database db:idx 21', err));
};

module.exports = {
  saveTrails,
  addTrails,
};
