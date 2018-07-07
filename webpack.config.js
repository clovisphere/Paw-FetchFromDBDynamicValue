const path = require('path')
const name = 'FetchFromDBDynamicValue'

module.exports = {
    entry: {
        app: './src/FetchFromDBDynamicValue.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: name + 'js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}
