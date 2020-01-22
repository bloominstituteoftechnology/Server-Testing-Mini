const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const Band = require('./bands/band');

const server = express();
server.use(bodyParser.json());

//logging, TBD: create morganOptions and pass it in, instead
server.use(morgan(`dev`));

//security
//server.use(helmet());

//cross origin request sharing permissions
// const corsOptions = {
//   origin: `*`,
//   methods: `GET, HEAD, PUT, PATCH, POST, DELETE`,
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };
// server.use(cors(corsOptions));

// routes
server.get('/api/bands', (req, res) => {
  Band.find({})
    .then(bands => {
      res.status(200).json(bands);
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = server;
