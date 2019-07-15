const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/engine.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'app')
    }
}