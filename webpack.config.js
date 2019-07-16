const path = require('path')


module.exports = {
    mode: 'development',
    entry: './src/engine.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'app')
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //Injects styles into DOM 
                    'css-loader', //Turns css into commonjs
                    'sass-loader' //Turns sass into css
                ]
            }
        ]
    }
}