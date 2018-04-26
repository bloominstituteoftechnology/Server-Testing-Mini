const mongoose = require('mongoose');
const server = require('./server');

mongoose.connect('mongodb://localhost/bands', {}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`\n=== connected to mongo ===\n`);
  }
});

const port = 5000;
server.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`\n=== listening on port ${port} ===\n`);
  }
});
