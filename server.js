const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Shopkin = require('./Shopkin');



const server = express();

server.use(bodyParser.json());
server.use(morgan('dev'));

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Running' })
})


server.get('/api/shopkins', (req, res) => {
   Shopkin.find({}, (err, shopkins) => {
       if(err) {
           res.status(500).json({ error: 'Cannot find your shopkins' });
       }
       res.json(shopkins);
   });
});

module.exports = server;