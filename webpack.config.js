const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
    entry: "./src/script.js",
    output: {
        filename: "./result.js",
        path: path.resolve(__dirname,'./dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devServer: {
        port: '8045',
        contentBase: path.join(__dirname, './dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({template:"./src/index.html"})

    ]
};