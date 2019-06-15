const path = require('path');

const common = require('./webpack.common');
const merge = require('webpack-merge');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: "development",

	// we don't want contentHash in development, only production
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: 'js/bundle.js'
		filename: 'js/[name].bundle.js'
	},

	module: {
		rules: [{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
					// options: {
					//     presets: ['@babel/preset-env']
					// }
				}
			},

			{
				test: /\.s?[ac]ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
});