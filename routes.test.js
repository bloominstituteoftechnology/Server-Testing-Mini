// connect to a test dummy database server
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');

const config = require('./api/config');
const server = require('./server');
const Band = require('./bands/band');

const expect = chai.expect;

mongoose.connect(config.testDb, {}, err => {
  if (err) return console.log(err);
  console.log('Test DB connection successful!!');
});

chai.use(chaiHTTP);

describe('Bands', () => {
  let bandId;
  beforeEach(done => {});
  afterEach(done => {});
  describe(`[GET] /api/bands`, () => {});
});
