const express = require('express');

const Post = require('./../collections/post');
const User = require('./../collections/user');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);

  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    time: Date().valueOf().toString().slice(4, 15)
  })

  newPost.save(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('New post published.');
      User.updateOne({email: 'sasithekanth@gmail.com'}, {
        posts: [newPost._id]
      },(err => {
        if (err) {
          console.log(err);
        } else {
          console.log('Post added to user.');
          res.redirect('/feed');
        }
      }))
    }
  })
});

module.exports = router;