const mongoose = require('mongoose');

const { Schema } = mongoose;

const BandSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Band = mongoose.model('Band', BandSchema);

module.exports = Band;
