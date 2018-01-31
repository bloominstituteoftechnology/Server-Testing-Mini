const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 3333;

server.use(morgan('combined'));
server.use(bodyParser.json());

server.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});

module.exports = server;
