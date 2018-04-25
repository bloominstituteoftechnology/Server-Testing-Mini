const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const Band = require('./band');
const server = express();
server.use(bodyParser.json());
server.use(morgan('dev'));

// ROUTES WILL BE BUILT HERE
server.get('/api/bands', (req, res) => {
  // Band.find({}, (err, bands) => {
  //   if (err) {
  //     res.status(500).json({ error: 'Cannot find your bands' });
  //   }
  //   res.json(bands);
  // });
});

module.exports = server;
