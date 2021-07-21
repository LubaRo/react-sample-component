module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/js/app.jsx',
  output: {
    path: __dirname + '/dist/js/',
    filename: "bundle.js",
    clean: true,
  },
  //devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/i,
        use: ['babel-loader']
      }
    ]
  }
}