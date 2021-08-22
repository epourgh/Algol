const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    devServer: {
        port: 3000
    },
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    { loader: "style-loader" },
                    // Translates CSS into CommonJS
                    { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                    // Compiles Sass to CSS
                    { loader: "sass-loader" },
                ]
            },
            {
                test: [/\.jsx?$/],
                use: 'babel-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/static", "index.html")
        })
    ]
};