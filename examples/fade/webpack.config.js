const webpack = require('webpack');
const path = require('path');
const del  = require('del');

// Clean Up Build
del(path.resolve(__dirname, 'build/js'), { force: true });

// Configuration
module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/js/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].min.js',
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
  devtool: 'source-map',
};
