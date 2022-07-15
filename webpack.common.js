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
  // entry: {main: "./src/index.js",   // main = [name]
  //            vendor: "./src/vendor.js"},
  // 'babel-polyfill'
  // @babel/polyfill/noConflict
  // entry: ['@babel/polyfill', './src/js/index.js'],
  entry: ['./src/js/index.js'],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },

      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',

            options: {
              name: 'img/[name].[ext]', // [name].[hash].
              // outputPath: "imgs"  //./
            },
          },
        ],
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
//

// package.json
// "scripts": {
//     "dev": "webpack --mode development",
//     "build": "webpack --mode production",
//     "start": "webpack-dev-server --mode development --open"
//   },
