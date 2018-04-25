const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');

mongoose.connect('mongodb://localhost/test', {}, err => {
  if (err) console.log(err);
  console.log('\n+++ connected to mongo test db +++\n');
});

const expect = chai.expect;
const server = require('./server');
// const Band = require('./band') // Schema

chai.use(chaiHTTP);
