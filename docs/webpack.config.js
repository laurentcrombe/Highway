const webpack = require('webpack');
const path = require('path');
const del  = require('del');

// Clean Up Build
del(path.resolve(__dirname, 'js'), { force: true });

// Configuration
module.exports = {
  entry: {
    main: path.resolve(__dirname, '_scripts/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: ['node_modules', 'bower_components'],
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
      'bower_components',
    ],
    extensions: ['.js'],
  },
  devtool: 'source-map',
};
