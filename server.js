const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Band = require('./band');
const server = express();

server.use(bodyParser.json());
server.use(morgan('dev'));

server.get('/api/bands', (req, res) => {
  Band.find({}, (err, bands) => {
    if (err) {
      res.status(500).json({ error: 'Cannot find your favorite artist' });
    }
    res.json(artists);
  });
});

module.exports = server;
