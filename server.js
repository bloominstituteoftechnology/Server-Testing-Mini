const express = require('express');
const morgan = require('morgan');

const Sfcoffee = require('./sfcoffee');

const server = express();
server.use(express.json());
server.use(morgan('dev'));


server.get('/api/sfcoffee', (req, res) => {
  Sfcoffee.find({}, (err, sfcoffee) => {
    if (err) {
      res.status(500).json({error: 'cant find any coffee shops'});
    }
    res.json(sfcoffee);
  });
});

server.post('/api/sfcoffee/create', (req, res) => {
  const newPlace = new Sfcoffee(req.body);
  newPlace.save()
  .then(place => {
    res.status(201).json(place)
  })
});

module.exports = server;