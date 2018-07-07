const path = require('path')
const name = 'FetchFromDBDynamicValue'

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        app: './src/FetchFromDBDynamicValue.js'
    },
    output: {
        path: path.resolve(__dirname, './build/io.clovisphere.PawExtensions.FetchFromDBDynamicValue'),
        pathinfo: true,
        publicPath: '/build/',
        filename: name + '.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}
