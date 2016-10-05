const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [ './app/main.js' ],
  output: {
    path: __dirname + "/dist",
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};

// module.exports = {
//   entry: [],
//   output: {},
//   module: {
//     loaders: [{}]
//   },
//   plugins: []
// };
