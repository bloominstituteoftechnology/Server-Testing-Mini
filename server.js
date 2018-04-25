const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Band = require('./model');

const server = express();
server.use(bodyParser.json());
server.use(morgan('dev'));

server.get('/api/bands', (req, res) => {
  Band.find({}).then(bands => {
    res.status(200).json(bands);
  });
});

module.exports = server;
