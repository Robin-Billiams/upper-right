const Options = require( '../mongoDB/buyOption.js' );
const db = require( '../mongoDB/index.js' );
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());
app.use('/', express.static(__dirname + '/../Client/dist'));

const port = 3002;

// app.get('/', ( req, res ) => {
//   res.sendFile(`index.html`, {root: './Client/dist'});
// });

let base = 0;

app.get('/api/base', ( req, res ) => {
  Options.find({ _id: base }).exec()// queries automaticaly return promises .exec() allows use of this
  .then( ( result ) => { res.send( result ) } );
});


app.get('/api/selection/:_id', ( req, res ) => {
  Options.find(req.params).exec()
  .then( (test) => { base = test } )
  // .then( (result) => { res.send(result) });
  // console.log( base );
  res.send(  );
})




app.listen(port, () => {
  console.log( `Listening on port ${port}` );
});