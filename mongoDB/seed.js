const Options = require( './buyOption.js' );
const mongoose = require( 'mongoose' );
const db = require( './index.js' );


const silence = new Options( { name: 'Trial options' } ); // rebuild this to build a random assortment of data
db.collection('test').insertOne(silence);
console.log( silence.name );