const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');

mongoose.connect('mongodb://localhost/test', {}, err => {
  if (err) return console.log(err);
  console.log('TEST DB Connection Achieved');
});

const expect = chai.expect;
const server = require('./server');
const Artist = require('./artist');

chai.use(chaiHTTP);

describe('Artists', () => {
  let ArtistId;
  beforeEach(done => {
    const newArtist = new Artist({
      name: 'Radiohead',
      genre: 'Alt-rock'
    });
    newArtist.save((err, savedArtist) => {
      if (err) {
        console.log(err);
        done();
      }
      ArtistId = savedArtist._id;
      done();
    });
  });

  afterEach(done => {
    Artist.remove({}, err => {
      if (err) console.log(err);
      return done();
    });
});

describe(`[GET] /api/artist`, () => {
  it('should get a list of all the artist in db', done => {
    chai
      .request(server)
      .get('/api/artist')
      .end((err, response) => {
        if (err) {
          console.log(err);
          return done();
        }
        expect(response.status).to.equal(200);
        return done();
      });
  });
});
});
