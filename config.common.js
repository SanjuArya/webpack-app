const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/engine.js',

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //Injects styles into DOM 
                    'css-loader', //Turns css into commonjs
                    'sass-loader' //Turns sass into css
                ]
            },

            {
                test: /\.html$/,
                use: [ 'html-loader' ]
            },

            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img'
                    }
                }  
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ]
}