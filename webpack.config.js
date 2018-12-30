const path = require('path');

module.exports = {
  entry: './assets/js/application.js',
  mode: 'production',
  output: {
    filename: 'application.min.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [{
      test: require.resolve('jquery'),
      use: [{
          loader: 'expose-loader',
          options: 'jQuery'
      },{
          loader: 'expose-loader',
          options: '$'
      }]
    }]
  }
};
