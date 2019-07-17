const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/engine.js',
    output: {
        filename: 'app.[contentHash].js',
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
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ]
}