const express = require('express');

const User = require('./../collections/user');
const Otp = require('./../functionalities/generateOtp');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', (req, res) => {

  Otp(req.body.name, req.body.email).then(response => {

    console.log(response);
    const newUser = new User({
      fullName: req.body.name,
      email: req.body.email,
      password: req.body.password,
      otp: response,
      verified: false,
      posts: [],
      friends: []
    });

    newUser.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('New user joined.');
        res.redirect('/otp');
      }
    });
  })
  .catch(err => {
    console.log(err);
  });

});

module.exports = router;