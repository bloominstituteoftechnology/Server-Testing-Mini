const express = require('express');
const morgan = require('morgan');
const server = express();

const Band = require('./models/band');

server.use(express.json());
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('connected');
});

server.post('');

module.exports = server;
