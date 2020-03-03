const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            use: ['babel-loader'],
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        publicPath: '/public/',
        contentBase: path.join(__dirname, 'public')
    }

};

//loader