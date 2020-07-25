const mongoose = require('mongoose');
const Schema = require('./schema')
mongoose.connect('mongodb://localhost/routefinder', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// const routeSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
// });

// const Item = mongoose.model('Item', itemSchema);

// const selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;