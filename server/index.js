const Options = require( '../mongoDB/buyOption.js' );
const db = require( '../mongoDB/index.js' );
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const port = 3001;

app.get('/api/options', ( req, res ) => {
  // res.send('okay');
  Options.find().exec()// queries automaticaly return promises .exec() allows use of this
  .then( ( result ) => { res.send( result ) } )
});





app.listen(port, () => {
  console.log( `listening on port ${port}` );
});