module.exports = {
  entry: [
    './original.js'
  ],
  output: {
    path: __dirname,
    filename: "compiled.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: []
};
