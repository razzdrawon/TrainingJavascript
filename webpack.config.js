const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./labs/src/intro/index.js",
    output: {
        path: path.resolve(__dirname, "dist"), // eslint-disable-line no-undef
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            { 
                test: /\.js$/, 
                use: { 
                    loader: 'babel-loader'
                } 
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './labs/src/intro/index.html' })]
};