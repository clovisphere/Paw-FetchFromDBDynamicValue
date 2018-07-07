var path = require('path');
var fs = require('fs');
var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const name = 'FetchFromDBDynamicValue'

module.exports = {
    mode: 'development',
    target: 'node',
    node: { __dirname: true },
    entry: path.resolve('./src/FetchFromDBDynamicValue.js'),
    output: {
        path: path.resolve(__dirname, './build/io.clovisphere.PawExtensions.FetchFromDBDynamicValue'),
        pathinfo: true,
        publicPath: '/build/',
        filename: name + '.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve('./src'),
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    },
    externals: nodeModules
}
