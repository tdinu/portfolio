
const path = require('path');

const common = require('./webpack.common');
const merge = require('webpack-merge'); 

const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = merge(common, {
    mode: "development",
    
    // we don't want contentHash in development, only production
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: 'js/bundle.js'
		filename: 'js/[name].bundle.js'
	},

	// if we want minified version in production,
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		title: 'My Portfolio',
	// 		filename: 'index.html',
	// 		template: './src/index.html'
	// 	}),
	// ],

	module: {
		rules: [
			{
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
