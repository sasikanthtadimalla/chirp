const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('friends');
})
router.post('/',(req, res) => {
  console.log(req.body);
  res.redirect('/friends');
});

module.exports = router;