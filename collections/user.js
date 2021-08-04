const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  otp: String,
  verified: Boolean,
  posts: [String],
  friends: [String]
})

const User = mongoose.model('User', userSchema);

module.exports = User;