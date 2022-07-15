const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  // we don't want contentHash in development, only production
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'js/bundle.js'
    filename: 'js/bundle.js',
    // publicPath: '/',
    // assetModuleFilename: 'img/[name][ext]',
    assetModuleFilename: 'img/[name][ext]',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //     presets: ['@babel/preset-env']
          // }
        },
      },

      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
