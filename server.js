const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();

server.use(bodyParser.json());
server.use(morgan('dev'));

const Shopkin = require('./shopkin');

server.get('/api/shopkins', (req, res) => {
   Shopkin.find({}, (err, shopkins) => {
       if(err) {
           res.status(500).json({ error: 'Cannot find your shopkins' });
       }
       res.json(shopkins);
   });
});

module.exports = server;