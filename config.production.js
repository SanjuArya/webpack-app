const path = require('path')
const merge = require('webpack-merge') //To merge config.common.js with this config file
const commom = require('./config.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = merge( commom, {
    mode: 'production',
    
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'app')
    },

    plugins: [
        new CleanWebpackPlugin()
    ]
})