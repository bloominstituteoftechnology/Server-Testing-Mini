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
  beforeEach(done => {
    const newBand = new Band({
      name: 'Radio Head',
      genre: 'All rock',
    });

    newBand
      .save()
      .then(savedBand => {
        bandId = savedBand._id;
      })
      .catch(err => {
        console.log(err);
        return done();
      });
  });
  afterEach(done => {
    Band.remove()
      .then(removed => {
        return done();
      })
      .catch(err => {
        console.log(err);
        return done();
      });
  });
  describe(`[GET] /api/bands`, () => {
    it('Should get a list of all the bands in db', done => {
      chai
        .request(server)
        .get('/api/bands')
        .end((err, response) => {
          if (err) {
            console.log(err);
            return done();
          }
          expect(response.status).to.equal(200);
          console.log(response);
          return done();
        });
    });
  });
});
