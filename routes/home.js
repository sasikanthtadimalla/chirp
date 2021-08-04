const express = require('express');
const User = require('./../collections/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('signin', {errMsg: ''});
});

router.post('/', (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email: email}, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.redirect('/feed');
        } else {
          res.render('signin', {errMsg: 'Email / password invalid.'});
        }
      } else {
        res.render('signin', {errMsg: 'Email / password invalid.'});
      }
    }
  });

});

module.exports = router;