const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/test' );
const db = mongoose.connection;
const Kitten = require( './buyOption.js' );
db.on( 'error', console.error.bind( console, 'connection error:' ) );

  // const optionsSchema = new mongoose.Schema({
  //   name: String,
  //   modelNum: Number,
  //   averageReview: {
  //     stars: Number,
  //     votes: Number,
  //   },
  //   insPlan2Yr: Number, //2 year insurance plan
  //   insPlan4Yr: Number, //4 year insurance plan
  //   installments: Number, //over 48 months 0% APR
  //   buyNow: Number
  // });

  // const Options = mongoose.model( 'Options', optionsSchema );
  const silence = new Kitten( { name: 'Silence' } );
  db.collection('kitties').insertOne(silence);
  console.log( silence.name );
