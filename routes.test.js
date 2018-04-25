const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('./server.js');

chai.use(chaiHTTP);

mongoose.connect('mongodb://localhost/testMini', {}, err => {
  if (err) return console.log(err);
  console.log('TEST DB Connection Achieved');
});
