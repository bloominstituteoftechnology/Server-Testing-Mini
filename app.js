const mongoose = require('mongoose');
const server = require('./server');
const port = 5550;

mongoose.connect('mongodb://localhost/bands', {}, err => {
  if (err) return console.log(err);
  console.log('Dancing with Database');
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`Server dancing on ${port}`);
});

//connect to liveserver /bands
