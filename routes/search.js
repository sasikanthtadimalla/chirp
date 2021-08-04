const express = require('express');

const User = require('./../collections/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('search', {foundPeople: [], searchTerm: ""});
})

router.post('/',(req, res) => {
  console.log(req.body);

  User.find({fullName: { $regex: req.body.personName, $options: "i" }}, (err, foundPeople) => {

    if (err) {
      console.log(err);
    } else {
      if (foundPeople.length > 0) {
        res.render('search', {foundPeople: foundPeople, searchTerm: req.body.personName});
      } else {
        res.render('search', {foundPeople: [], searchTerm: req.body.personName});
      }
    }
  })
});

router.post('/addFriend', (req, res) => {

  let friends;

  User.findOne({email: 'sasithekanth@gmail.com'}, (err, foundPerson) => {
    if (err) {
      console.log(err);
    } else {
      friends = foundPerson.friends;
      friends.push(req.body.friendEmail);
      User.updateOne({email: 'sasithekanth@gmail.com'}, {
        friends: friends
      }, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('New friend added.');
        }
      })
    } 
    
  })


})

module.exports = router;