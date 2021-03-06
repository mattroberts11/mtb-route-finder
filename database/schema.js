const mongoose = require('mongoose');

const { Schema } = mongoose;

const TrailSchema = new Schema({
  id: Number,
  name: String,
  type: String,
  summary: String,
  difficulty: String,
  stars: Number,
  starVotes: Number,
  location: String,
  url: String,
  imgSqSmall: String,
  imgSmall: String,
  imgSmallMed: String,
  imgMedium: String,
  length: Number,
  ascent: Number,
  descent: Number,
  high: Number,
  low: Number,
  longitude: Number,
  latitude: Number,
  conditionStatus: String,
  conditionDetails: String,
  conditionDate: String,
});

const SaveTrailSchema = new Schema({
  name: String,
});

module.exports = {
  TrailSchema,
  SaveTrailSchema,
};
