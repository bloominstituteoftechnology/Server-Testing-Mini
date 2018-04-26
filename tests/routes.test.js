const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
mongoose.connect('mongodb://localhost/bands', {}, err => {
  if (err) console.log(err);
  console.log(`\n=== Connected to mongo test ===\n`);
});
const expect = chai.expect;
const assert = chai.assert;
const server = require('../server');
chai.use(chaiHTTP);
//schema
const Band = require('../models/band');

describe('Bands', () => {
  /*
  before(function(done) {
    mongoose.connect('mongodb://localhost/test', {}, err => {
      if (err) return console.log(err);
      console.log('\n+++ connected to mongo test db +++\n');
    });
    done();
  });

  after(done => {
    console.log('in after');
    mongoose.connection.close();
    done();
  });
*/
  /*
  beforeEach(done => {
    console.log('in beforeEach');
    const bandOne = new Band({
      name: 'Bill Withers',
      genre: 'Funk',
      tourStatus: false,
    });
    bandOne.save((err, savedBand) => {
      if (err) {
        console.log('before', err.message);
        return done();
      }
      done();
    });
    const bandTwo = new Band({
      name: 'Fleet Foxes',
      genre: 'Alt',
      tourStatus: true,
    });
    bandTwo.save((err, savedBand) => {

      if (err) {
        console.log('before', err.message);
        return done();
      }
      done();
    });
  });

  afterEach(done => {
    console.log('in afterEach');
    Band.remove({}, err => {
      if (err) {
        console.log('after', err.message);
        return done();
      }
      done();
    });
  });
*/
  describe(`[GET] /api/bands`, () => {
    console.log('in get describe with 200');
    it('should get a list of all bands in the database', done => {
      chai
        .request(server)
        .get('/api/bands')
        .end((err, response) => {
          if (err) {
            console.log('get', err.message);
            return done();
          }
          expect(response.status).to.equal(200);
          done();
        });
    });
  });
  /*
  describe(`[GET] /api/bands`, () => {
    it('should return an array of bands', done => {
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
    it('should return properties _id, name, genre, tourStatus', done => {
      chai
        .request(server)
        .get('/api/bands')
        .end((err, response) => {
          // console.log("+++", response.body[0]._id);
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
  */
});
