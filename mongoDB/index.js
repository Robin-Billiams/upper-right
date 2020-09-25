Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require( 'mongoose' ));
const db = mongoose.connection;
mongoose.connect( 'mongodb://localhost/options' );

db.on( 'error', console.error.bind( console, 'connection error:' ) );


module.exports = db;

