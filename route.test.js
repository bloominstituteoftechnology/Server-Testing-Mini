const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');
const server = require('./server');

mongoose.connect('mongodb://localhost/server-testing');

chai.use(chaiHTTP);

describe('server', () => {
  describe('`[POST] /food`', () => {
    it('should add a new type of food', () => {
      const newFood = {
        name: 'taco',
        type: 'Mexican'
      };
      chai
        .request(server)
        .post('/food')
        .send(newFood)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal('taco');
      
        });    
    });
  });
  describe('`[GET] /`', () => {
    it('should return \'testing\'', () => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          if (err) console.error(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.equal('testing');
        });
    });
  });
});