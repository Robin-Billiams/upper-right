const mongoose = require('mongoose');

const optionsSchema = new mongoose.Schema({
  name: String,
  modelNum: Number,
  averageReview: {
    stars: Number,
    votes: Number,
  },
  insPlan2Yr: Number, //2 year insurance plan
  insPlan4Yr: Number, //4 year insurance plan
  installments: Number, //over 48 months 0% APR
  buyNow: Number
});
const Options = mongoose.model( 'Options', optionsSchema );

module.exports = Options;