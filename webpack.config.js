const path = require("path"); // Уже установлен вместе с NodeJS
module.exports = {
    mode: "development",
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist')
        // __dirname === ~/projects/abcd/cursor-webpack
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: "ts-loader"
        }]
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: false,
        port: 5555,
    }
}