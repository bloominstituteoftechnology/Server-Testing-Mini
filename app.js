const mongoose = require('mongoose');
const server = require('./server');
const port = 5000;

mongoose.connect('mongodb://localhost/shopkins', {}, err => {
    if(err) return console.log(err);
    console.log('DB Connection Running');
});

server.listen(port, err => {
    if(err) console.log(err);
    console.log(`Server running on ${port}`);
});