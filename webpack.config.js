const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const path = require('path');
// const webpack = require('webpack'); //to access built-in plugins

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    // mode: "development",
    // entry: './src/js/index.js',

    entry: [
        'babel-polyfill',
        './src/js/index.js'
    ],

    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'

    },

    plugins: [

        new HtmlWebpackPlugin({

            title: 'My Portfolio',
            filename: 'index.html',
            template: './src/index.html'

        }),

        new MiniCssExtractPlugin({

            filename: "css/style.css"

        })

    ],
    
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
                }
            },

            {
                test: /\.s?[ac]ss$/,
                use: [

                    MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }

                ],
            },
        ]
    },

    devtool: 'source-map',

    mode: devMode ? 'development' : 'production'

}

// module.exports ({ mode }) => {
//     return {
//         mode,
//         plugins: [
//             new HtmlWebpackPlugin({
//                 template: './src/index.html'
//             })
//         ],
//         devtool: mode === 'development' ? 'source-map' : 'none'
//     };
// };

// module: {
//     rules: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: "eslint-loader"
//         },

//         {
//             test: /\.scss$/,
//             use: [
//                 "style-loader", // creates style nodes from JS strings
//                 "css-loader", // translates CSS into CommonJS
//                 "sass-loader" // compiles Sass to CSS, using Node Sass by default
//             ]
//         },

//         {
//             test: /\.m?js$/,
//             exclude: /(node_modules|bower_components)/,
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/preset-env']
//                 }
//             }
//         },

//         {
//             test: /\.(png|jpe?g|gif)$/,
//             use: [{
//                 loader: 'file-loader',
//                 options: {},
//             }, ],
//         },

//         {
//             test: /\.(html)$/,
//             use: {
//                 loader: 'html-loader',
//                 options: {
//                     attrs: [':data-src']
//                 }
//             }
//         },

//         {
//             test: /\.bundle\.js$/,
//             use: 'bundle-loader'
//         }

//     ]
// }

// {
            //     test: /\.scss$/,
            //     use: [
            //         // fallback to style-loader in development
            //         process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            //         "css-loader",
            //         "sass-loader"
            //     ]
            // }