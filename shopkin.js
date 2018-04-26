import { truncate } from 'fs';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShopkinSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
});

const Shopkin = mongoose.model('Shopkin', ShopkinSchema);

module.exports = Shopkin;