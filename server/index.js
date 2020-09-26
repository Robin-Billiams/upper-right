const db = require( './index.js' );
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded);

const port = 3001;





app.listen(port, () => {
  console.log( `listening on port ${port}` );
});