const mongoose = require('mongoose');
const server = require('./server');
const port = 5000;

mongoose.connect('mongodb://localhost/api/sfcoffee', {}, err => {
  if (err) {
    return console.log(err);
  }
  console.log('connected to DB');
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server running on ${port}`);
});