const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
    entry: "./src/funcAll.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'/dist'),
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({template:"./src/index.html"})
    ]
};