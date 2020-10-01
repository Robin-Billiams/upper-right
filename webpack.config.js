const path = require('path');

module.exports = {
  entry: `./Client/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/Client/dist`
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
