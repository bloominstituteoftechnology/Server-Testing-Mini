const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();
server.use(bodyParser.json());
server.use(morgan('dev'));

// build routes here

server.get('/', (req, res) => {
  res.send('Spinning the server vinyl')
})

module.exports = server;
