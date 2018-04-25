const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');

mongoose.connect('mongodb://localhost/test', {}, err => {
    if(err) return console.log(err);
    console.log('Test DB Connection');
});

const expect = chai.expect;
const server = require('./server');
const Shopkin = require('./shopkin');

chai.use(chaiHTTP);

describe('Shopkins', () => {
    let shopkinId;
    beforeEach(done => {
        const newShopkin = new Shopkin({
            name: 'Apple Blossom',
            genre: 'Apple'
        });
        newShopkin.save((err, savedShopkin) => {
            if(err) {
                console.log(err);
                done();
            }
            shopkinId = savedShopkin._id;
            done();
        });
    });

    afterEach(done => {
        Band.remove({}, err => {
            if (err) console.log(err);
            return done();
        });
    });

    describe(`[GET] /api/shopkins`, () => {
        it('should get a list of all the bands in db', done => {
            chai
                .request(server)
                .get('/api/shopkins')
                .end((err, response) => {
                    console.log(err);
                    return done();
                });
        });
    });
});