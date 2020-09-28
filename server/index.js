const Options = require( '../mongoDB/buyOption.js' );
const db = require( '../mongoDB/index.js' );
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());

const port = 3002;

app.get('/', ( req, res ) => {
  res.sendFile(`index.html`, {root: './Client/dist'});
});

app.get('/api/options', ( req, res ) => {
  Options.find().exec()// queries automaticaly return promises .exec() allows use of this
  .then( ( result ) => { res.send( result ) } );
});




app.listen(port, () => {
  console.log( `TESTING FOR FILE listening on port ${port}` );
});