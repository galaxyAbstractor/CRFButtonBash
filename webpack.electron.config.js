'use strict';

const path = require('path');

const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: './src/electron/main.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'out/electron')
    },
    module: {
        rules: []
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.ExternalsPlugin('commonjs', [
            'onoff', 'opc'
        ])
    ],
    // tell webpack that we're building for electron
    target: 'electron-main',
    node: {
        // tell webpack that we actually want a working __dirname value
        // (ref: https://webpack.js.org/configuration/node/#node-__dirname)
        __dirname: false
    }
};