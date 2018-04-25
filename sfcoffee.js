const mongoose = require('mongoose');
const { Schema } = mongoose;

const SfcoffeeSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});

const Sfcoffee = mongoose.model('Sfcoffee', SfcoffeeSchema);

module.exports = Sfcoffee;