const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode:"development",
    entry:{
        main:"./src/script.js",
        vinnytsia: "./src/cityVinnytsia.js",
        london: "./src/cityLondon.js",
        paris: "./src/cityParis.js"
    },

    output: {
        filename: "./[name].js",
        path: path.resolve(__dirname,'./dist')
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
        new HTMLWebpackPlugin({
            template:"./src/index.html",
            chunks:["main"],
            inject:"body"
        }),
        new HTMLWebpackPlugin({
            filename:"london.html",
            template:"./src/london.html",
            chunks:["london"],
            inject:"body"
        }),
        new HTMLWebpackPlugin({
            filename:"paris.html",
            template:"./src/paris.html",
            chunks:["paris"],
            inject:"body"
        }),
        new HTMLWebpackPlugin({
            filename:"vinnytsia.html",
            template:"./src/vinnytsia.html",
            chunks:["vinnytsia"],
            inject:"body"
        }),
        new CleanWebpackPlugin()
    ]
};