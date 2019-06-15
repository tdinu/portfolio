// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const path = require('path');

const common = require('./webpack.common');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: "production",
	// entry: './src/js/index.js',

	// entry: [ 'babel-polyfill', './src/js/index.js' ],

	// we don't want contentHash in development, only production
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: 'js/bundle.js'
		//filename: 'main.[contentHash].js'
		// for multiple entries, [name] takes the name from entry common (main or vendor)
		filename: 'js/[name].[contentHash].js'
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].[contentHash].css"
		}),
		new CleanWebpackPlugin()
	],

	module: {
		rules: [
		  {
			test: /\.scss$/,
			use: [
			  MiniCssExtractPlugin.loader, //3. Extract css into files
			  "css-loader", //2. Turns css into commonjs
			  "sass-loader" //1. Turns sass into css
			]
		  }
		]
	}
});

// =====================

// module: {
// 	rules: [
// 		{
// 			test: /\.m?js$/,
// 			exclude: /(node_modules|bower_components)/,
// 			use: {
// 				loader: 'babel-loader'
// 				// options: {
// 				//     presets: ['@babel/preset-env']
// 				// }
// 			}
// 		},

// 		{
// 			test: /\.s?[ac]ss$/,
// 			use: [
// 				'style-loader',
// 				'css-loader',
// 				'sass-loader'
// 			]
// 		}
// 	]
// },

// =========================

// plugins: [
// 	new HtmlWebpackPlugin({
// 		title: 'My Portfolio',
// 		filename: 'index.html',
// 		template: './src/index.html'
// 	}),

// new HtmlWebpackPlugin({
// 	title: 'About Me',
// 	filename: 'about.html',
// 	template: './src/about.html'
// }),

// new HtmlWebpackPlugin({
// 	title: 'My Work',
// 	filename: 'work.html',
// 	template: './src/work.html'
// }),

// new HtmlWebpackPlugin({
// 	title: 'Contact Me',
// 	filename: 'contact.html',
// 	template: './src/contact.html'
// }),

// new MiniCssExtractPlugin({
// 	filename: 'css/style.css'
// })
// ],