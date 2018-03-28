const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('combined'));
server.use(express.json());

server.get('/', (req, res) => {
  res.json('testing');
});

server.post('/food', (req, res) => {
  res.send(req.body);
});

module.exports = server;