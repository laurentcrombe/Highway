const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
const path = require('path');
const del  = require('del');

// Clean Up Build
del(path.resolve(__dirname, 'dist'), { force: true });

// Configuration
module.exports = {
  entry: {
    'highway': path.resolve(__dirname, 'src/highway.js'),
    'highway.min': path.resolve(__dirname, 'src/highway.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Highway',
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
  plugins: [
    new CompressionPlugin({
      test: /\.min\.js$/,
      algorithm: 'gzip',
    }),
    new UglifyJSPlugin({
      include: /\.min\.js$/,
      minimize: true,
    }),
  ],
  devtool: 'source-map',
};
