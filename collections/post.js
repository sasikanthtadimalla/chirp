const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  time: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;