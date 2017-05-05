const webpack = require('webpack');
const path = require('path');
const del  = require('del');

// Clean Up Build
del(path.resolve(__dirname, 'build'), { force: true });

// Configuration
module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
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
};
