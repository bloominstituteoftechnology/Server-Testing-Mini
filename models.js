const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  }
});

FoodSchema.methods.getFoodName = function() {
  return this.name;
};

FoodSchema.statics.getAllFoods = (cb) => {
  Food.find({}, (err, foods) => {
    if (err) console.error(err);
    cb(foods);
  });
};

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;