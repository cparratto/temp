var webpack = require('webpack');

module.exports = {
  entry: {
      "app": ['./webpack/assets', './src/app']
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
      extensions: ['.min.js', '.js', '.ts'],
      alias: {
          'react': 'react/dist/react.js',
          'react-dom': 'react-dom/dist/react-dom.js',
      }
  },
  devtool: 'source-map',
  module: {
      loaders: [
        // TypeScript loader
        { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ },
        // css loader
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        // Loaders for bootstrap.css fonts
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  plugins: [
      //new webpack.optimize.UglifyJsPlugin()
  ]
}
