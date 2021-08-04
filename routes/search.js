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

module.exports = router;