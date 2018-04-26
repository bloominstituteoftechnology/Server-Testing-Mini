const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
// mongoose.connect('mongodb://localhost/bands', {}, err => {
//   if (err) console.log(err);
//   console.log(`\n=== Connected to mongo test ===\n`);
// });
const expect = chai.expect;
const assert = chai.assert;
const server = require('../server');
chai.use(chaiHTTP);
//schema
const Band = require('../models/band');

describe('Bands', () => {
  before(function(done) {
    mongoose.connect('mongodb://localhost/test', {}, err => {
      if (err) return console.log(err);
      console.log('\n+++ connected to mongo test db +++\n');
    });
    done();
  });

  after(done => {
    mongoose.connection.close();
    done();
  });

  beforeEach(function(done) {
    // removed arrow fn to use this on line 54
    const bandOne = new Band({
      name: 'Bill Withers',
      genre: 'Funk',
      tourStatus: false,
    });
    bandOne.save((err, savedBand) => {
      if (err) {
        return done();
      }
      // done();
    });
    const bandTwo = new Band({
      name: 'Fleet Foxes',
      genre: 'Alt',
      tourStatus: true,
    });
    bandTwo.save((err, savedBand) => {
      if (err) {
        return done();
      }
      // done();
    });
    this.timeout(3000);
    setTimeout(done, 2500);
  });

  afterEach(done => {
    Band.remove({}, err => {
      if (err) {
        return done();
      }
      done();
    });
  }); // end of describe containing Mocha hooks

  describe(`[GET] /api/bands`, () => {
    it('should return status 200 if successful', done => {
      chai
        .request(server)
        .get('/api/bands')
        .end((err, response) => {
          if (err) {
            return done();
          }
          expect(response.status).to.equal(200);
          done();
        });
    });
  });

  describe(`[GET] /api/bands`, () => {
    it('response body should be an array', done => {
      chai
        .request(server)
        .get('/api/bands')
        .end((err, response) => {
          if (err) {
            return done(err);
          }
          assert.isArray(response.body);
          done();
        });
    });
  });

  describe(`[GET] /api/bands`, () => {
    it('response body should have properties: _id, name, genre, tourStatus', done => {
      chai
        .request(server)
        .get('/api/bands')
        .end((err, response) => {
          if (err) {
            return done(err);
          }
          assert.exists(response.body[0].name, 'name');
          assert.exists(response.body[0].genre, 'genre');
          assert.exists(response.body[0].tourStatus, 'tourStatus');
          assert.exists(response.body[0]._id, '_id');
          done();
        });
    });
  });
});
