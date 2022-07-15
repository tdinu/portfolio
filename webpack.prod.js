const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

const common = require('./webpack.common');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  // we don't want contentHash in development, only production
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'js/bundle.js'
    //filename: 'main.[contentHash].js'
    // for multiple entries, [name] takes the name from entry common (main or vendor)
    // Tweak this to match the GitHub project name
    // publicPath: '/webpack-demo/',
    // assetModuleFilename: 'img/[name][ext]',
    filename: 'js/main.js',
    assetModuleFilename: 'img/[name][ext]',
    clean: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css', // css/
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          'css-loader', //2. Turns css into commonjs
          'sass-loader', //1. Turns sass into css
        ],
      },
    ],
  },
});
