const db = require( '../mongoDB/index.js' );
const express = require('express');
const app = express();

// app.use(express.json());
// app.use(express.urlencoded);

const port = 3001;

app.get('/api/options', ( req, res ) => {
  res.send('okay');
  // db.collection( 'options' ).find()
  // .then((result) => { console.log(result)})
  // .then(res.send('ok'));
});





app.listen(port, () => {
  console.log( `listening on port ${port}` );
});