'use strict';

// pull in the 'path' module from node
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require("webpack");

// export the configuration as an object
module.exports = {
    // development mode will set some useful defaults in webpack
    mode: 'development',
    // the entry point is the top of the tree of modules.
    // webpack will bundle this file and everything it references.
    entry: './src/app/main.jsx',
    // we specify we want to put the bundled result in the matching out/ folder
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'out/app'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/app/views/app.html',
        }),
        new webpack.ExternalsPlugin('commonjs', [
            'electron'
        ])
    ],
    module: {
        // rules tell webpack how to handle certain types of files
        rules: [
            {
                test: /\.scss$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-react"]
                    }
                }
            }
        ],
    },
    resolve: {
        // specify certain file extensions to get automatically appended to imports
        // ie we can write `import 'index'` instead of `import 'index.ts'`
        extensions: ['.js', '.jsx'],
    },
};