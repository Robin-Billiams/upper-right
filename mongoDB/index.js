const mongoose = require( 'mongoose' );
const db = mongoose.connection;
mongoose.connect( 'mongodb://localhost/test' );

db.on( 'error', console.error.bind( console, 'connection error:' ) );


module.exports = db;

