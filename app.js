require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/chirpDB", {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

// app.use('/sample', require('./routes/sample'));

app.use('/', require('./routes/home'));
app.use('/signup', require('./routes/signup'));
app.use('/otp', require('./routes/otp'));
app.use('/feed', require('./routes/feed'));
app.use('/friends', require('./routes/friends'));
app.use('/search', require('./routes/search'));
app.use('/post', require('./routes/post'));
app.use('/profile', require('./routes/profile'));

app.listen(3000, () => {
  console.log('Server started on 3000.');
});