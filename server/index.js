const Options = require( '../mongoDB/buyOption.js' );
const db = require( '../mongoDB/index.js' );
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use( cors() );
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/../Client/dist'));

const port = 4003;

// app.get('/', ( req, res ) => {
//   res.sendFile(`index.html`, {root: './Client/dist'});
// });

let base = 0;

app.get('/api/base', ( req, res ) => {
  res.header('Access-Control-Allow-Origin', '*');
  Options.find().exec()// queries automaticaly return promises .exec() allows use of this
  .then( ( result ) => { res.send( result ) } );
});


app.get('/:_id', ( req, res ) => {
  res.header('Access-Control-Allow-Origin', '*');
  Options.find(req.params).exec()
  .then( (test) => {
    base = test
    res.send( base );
  });
});


app.listen(port, () => {
  console.log( `Listening on port ${port}` );
});