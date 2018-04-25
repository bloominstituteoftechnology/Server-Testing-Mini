const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {}, err => {
  if (err) return console.log(err);
  console.log('test database connected');
});

const Sfcoffee = require('./sfcoffee');
const server = require('./server');

const chai = require('chai');
const chaiHTTP = require('chai-http');

const expect = chai.expect;

chai.use(chaiHTTP);

describe('Sfcofees', () => {
  let placeId;
  beforeEach(done => {
    const newSfcoffee = new Sfcoffee({
      name: 'RoCafe',
      address: '2739 Geary Blvd'
    });
    newSfcoffee.save((err, savedPlace) => {
      if (err) {
        console.log(err);
        done();
      }
      placeId = savedPlace._id;
      done();
    });
  });
  
  afterEach(done => {
    Sfcoffee.remove({}, err => {
      if (err) console.log(err);
      done();
    });
  });
  
  describe(`[GET] /api/sfcoffee`, () => {
    it('should get a list of all the coffee shops in db', done => {
      chai.request(server)
        .get('/api/sfcoffee')
        .end((err, response) => {
          if (err) {
            console.log(err);
            done();
          }
          expect(response.status).to.equal(200);
          console.log(placeId);
          done();
        }) 
    });
  });
  
  describe(`[POST] /api/sfcoffee/create`, () => {
    it('should add a new place to the database', done => {
      chai.request(server)
        .post('/api/sfcoffee/add')
        .send({
          name: "Enchante",
          address: "6237 Geary Blvd"
        })
        .end((err, response) => {
          if (err) {
            console.log(err);
            done();
          }
          console.log('response: ', response.body);
          expect(response.status).to.equal(201);
          done();
        })
    });
  });
  
});