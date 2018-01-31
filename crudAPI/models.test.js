const mongoose = require('mongoose');
const Band = require('./models');

const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

describe('Bands', () => {
  before(done => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/test');
    const db = mongoose.connection;
    db.on('error', () => console.lerror.bind(console, 'connection error'));
    db.open('open', () => {
      console.log('we are connected');
      done();
    });
  });

  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  
});

