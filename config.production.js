const path = require('path')
const merge = require('webpack-merge') //To merge config.common.js with this config file
const commom = require('./config.common')


module.exports = merge( commom, {
    mode: 'production',
    
    output: {
        filename: 'app.[contentHash].js',
        path: path.resolve(__dirname, 'app')
    }
})