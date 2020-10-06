const mongoose = require('mongoose');

const optionsSchema = new mongoose.Schema({
  _id: Number,
  name: Array,
  modelNum: Array,
  description: String,
  averageReview: {
    stars: Number,
    votes: Number,
  },
  option: String,
  options: Array,
  prices: Array,
  insPlan2Yr: Array, //2 year insurance plan
  insPlan4Yr: Array, //4 year insurance plan
  installments: Array, //over 48 months 0% APR
  buyNow: Number,
  savings: Number
});
const Options = mongoose.model( 'Options', optionsSchema );

module.exports = Options;