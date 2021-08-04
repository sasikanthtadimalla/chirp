const express = require('express');

const User = require('./../collections/user');
const Post = require('./../collections/post');

const router = express.Router();

router.get('/', (req, res) => {

  let posts = [];

  User.findOne({email: 'sasithekanth@gmail.com'}, (err, foundPerson) => {

    if (err) {
      console.log(err);
    } else {
      foundPerson.posts.forEach((post) => {

        Post.findOne({_id: post}, (err, foundPost) => {
          if (err) {
            console.log(err);
          } else {
            posts.push(foundPost);
          }
        })
      })
      res.render('feed', {posts: posts, fullName: foundPerson.fullName});
    }
  })

})

module.exports = router;