const express = require('express');

const User = require('./../collections/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('otp', {errMsg: ''});
});

router.post('/', (req, res) => {

  User.findOne({email: 'sasithekanth@gmail.com'}, (err, foundPerson) => {
    if (err) {
      console.log(err);
    } else {
      const otp = foundPerson.otp;
      if (otp === req.body.otp) {
        console.log('OTP correct.');
        User.updateOne({email: 'sasithekanth@gmail.com'}, {
          verified: true
        }, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('User verified.');
            res.redirect('/feed');
          }
        })
        
      } else {
        res.render('otp', {errMsg: 'OTP invalid. Please enter correct OTP.'});
      }
    }
  })

});

module.exports = router;