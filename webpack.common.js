// import 'regenerator-runtime/runtime';
// polyfill all `core-js` features:
// import 'core-js';
// polyfill only stable `core-js` features - ES and web standards:
// import 'core-js/stable';
// polyfill only stable ES features:
// import 'core-js/es';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: ['./src/js/index.js'],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // type: 'asset/resource',
        type: 'asset',
      },
    ],
  },

  // if we want minified in prod, move this in dev
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Portfolio',
      filename: 'index.html',
      template: './src/index.html',
    }),

    // my portfolio
    new HtmlWebpackPlugin({
      title: 'About Me',
      filename: 'about.html',
      template: './src/about.html',
    }),

    new HtmlWebpackPlugin({
      title: 'My Work',
      filename: 'work.html',
      template: './src/work.html',
    }),

    new HtmlWebpackPlugin({
      title: 'Contact Me',
      filename: 'contact.html',
      template: './src/contact.html',
    }),
  ],
};
