const mongoose = require('mongoose');
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

const Food = require('./models');

describe('Foods', () => {
  describe('`getFoodName`', () => {
    it('should return the expected food name', () => {
      const food = new Food({
        name: 'pasta',
        type: 'Italian',
      });
      expect(food.getFoodName()).to.equal('pasta');
    });
  });
  describe('`getAllFoods`', () => {
    it('should return all foods', () => {
      sinon.stub(Food, 'find');
      Food.find.yields(null, [
        { name: 'taco', type: 'Mexican' },
        { name: 'pasta', type: 'Italian' }
      ]);
      Food.getAllFoods(foods => {
        expect(foods.length).to.equal(2);
        expect(foods[1].name).to.equal('pasta');
        Food.find.restore();
      });
    });
  });
});