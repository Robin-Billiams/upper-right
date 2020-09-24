const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/test', { useNewUrlParser: true } );
const db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error:' ) );
db.once( 'open', () => {
  const statSchema = new mongoose.Schema({
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
  console.log('We are connected!!');
});