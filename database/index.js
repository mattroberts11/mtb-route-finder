const mongoose = require('mongoose');
const Schema = require('./schema');
require('dotenv').config();

mongoose.connect(process.env.MONGO_ATLAS_DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  try {
    console.log('Connected to MongoDB atlas.');
  } catch (error) {
    console.log('Could not connect to atlas');
  }
});

const SaveTrail = mongoose.model('SaveTrail', Schema.SaveTrailSchema);

const saveTrails = (trailObj) => {
  console.log(
    'trailObj= ', trailObj,
  );
  const newTrail = new SaveTrail(trailObj);
  return newTrail.save()
    .then(() => ('Trail saved successfully'))
    .catch((err) => console.error('Error adding trail to database db:idx 21', err));
};

const AddTrail = mongoose.model('AddTrail', Schema.TrailSchema);

const addTrails = (addTrailObj) => {
  console.log(
    'addObj= ', addTrailObj,
  );
  const newTrail = new AddTrail(addTrailObj);
  return newTrail.save()
    .then(() => ('Trail added successfully'))
    .catch((err) => console.error('error adding trail to database db:idx 21', err));
};

module.exports = {
  saveTrails,
  addTrails,
};
