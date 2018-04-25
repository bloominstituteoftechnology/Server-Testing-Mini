const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Mongoose
mongoose
  .connect('mongodb://localhost/testing-mini')
  .then(() => {
    console.log('\n=== Connected to MongoDB ===\n');
  })
  .catch(err => console.log('database connection failed', err));

// Server
const server = express();

// Logger
const logger = (req, res, next) => {
  console.log('d-(OvO")z looks correct to me', req.body);

  next();
};

// Middleware
server.use(morgan('dev'));
server.use(express.json());
server.use(logger);

const port = 5000;
server.listen(port, () => console.log('\n=== API on port 5000 ===\n'));
