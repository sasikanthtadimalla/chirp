const express = require('express');
const Post = require('./../collections/post');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('profile');
})

router.post('/', (req, res) => {

  console.log('posted!!!');

  // const newPost = new Post({
  //   email: 'sasithekanth@gmail.com',
  //   title: req.body.title,
  //   body: req.body.body
  // });

  // newPost.save(err => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('New post posted.');
  //     res.redirect('/profile');
  //   }
  // })

});

module.exports = router;