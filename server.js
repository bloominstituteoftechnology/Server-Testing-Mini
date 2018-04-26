const express = require('express');
const morgan = require('morgan');
const server = express();

const Band = require('./models/band');

server.use(express.json());
server.use(morgan('dev'));

server.get('/api/bands', (req, res) => {
  Band.find({}, (err, bands) => {
    if (err) {
      res.status(500).json({ errorMessage: 'Cannot find bands' });
    }
    res.status(200).json(bands);
  });
});

server.post('/api/bands');

module.exports = server;
