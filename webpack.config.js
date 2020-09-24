var path = require('path');

module.exports = {
  entry: `./Client/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: '/Client/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
