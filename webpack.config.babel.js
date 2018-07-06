import webpack from 'webpack'
import path from 'path'

const name = 'FetchFromDBDynamicValue'

const config = {
    mode: 'development',
    target: 'node',
    entry: [
        './src/FetchFromDBDynamicValue.js'
    ],
    output:{
        path: path.join(__dirname,
            './build/io.clovisphere.PawExtensions.FetchFromDBDynamicValue'),
       // pathInfo: true,
        publicPath: '/build/',
        filename: name + '.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                test: /\.jsx?$/,
            }
        ]
    }
}
module.exports = config
