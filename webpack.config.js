const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    highway: path.resolve(__dirname, 'src/highway.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components'),
        ],
        options: {
          presets: ['env', ['es2015', { 'modules': false }]],
        },
      },
    ],
  },
  resolve: {
   modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js'],
  },
  plugins: [
    new UglifyJSPlugin(),
    new CompressionPlugin(),
  ],
  context: __dirname,
};
