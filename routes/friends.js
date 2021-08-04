const express = require('express');
const User = require('./../collections/user');

const router = express.Router();

router.get('/', (req, res) => {
  User.findOne({email: 'sasithekanth@gmail.com'}, (err, foundPerson) => {
    if (err) {
      console.log(err);
    } else {
      const friendEmails = foundPerson.friends;
      // console.log(friendEmails);
      let friendNames = [];
      friendEmails.forEach(friendEmail => {
        User.findOne({email: friendEmail}, (err, foundFriend) => {
          if (err) {
            console.log(err);
          } else {
            // console.log(foundFriend);
            friendNames.push({
              name: foundFriend.fullName,
              email: foundFriend.email
            });
            console.log('friend added');
          }
        })
      })
      setTimeout(() => {
        res.render('friends', {friends: friendNames});
      }, 1000);

    }
  })
})

router.post('/',(req, res) => {
  console.log(req.body);

  
  res.redirect('/friends');
});

module.exports = router;