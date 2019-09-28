const path = require("path");

module.exports = {
    entry:  './src/index.ts',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
        }]
    }
};
