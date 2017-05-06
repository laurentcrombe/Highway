const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
const path = require('path');
const del  = require('del');

// Clean Up Build
del(path.resolve(__dirname, 'build'), { force: true });

// Configuration
module.exports = {
  entry: {
    highway: path.resolve(__dirname, 'src/highway.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].min.js',
    library: 'Highway',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: ['node_modules'],
        options: {
          presets: ['env', ['es2015', { 'modules': false }]],
        },
      },
    ],
  },
  resolve: {
    modules: [
      '.',
      'src',
      'node_modules',
    ],
    extensions: ['.js'],
  },
  plugins: [
    new CompressionPlugin(),
    new UglifyJSPlugin(),
  ],
};
