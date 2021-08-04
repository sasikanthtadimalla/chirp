const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  email: String
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;