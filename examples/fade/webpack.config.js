const webpack = require('webpack');
const path = require('path');
const del  = require('del');

// Clean Up Build
del(path.resolve(__dirname, 'dist/js'), { force: true });

// Configuration
module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/js/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
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
    alias: {
      highway: 'highway.js/dist/highway.min',
    },
    modules: [
      '.',
      'src',
      'node_modules',
    ],
    extensions: ['.js'],
  },
  devtool: 'source-map',
};
