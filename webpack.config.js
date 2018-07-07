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
    entry: {
        app: './src/FetchFromDBDynamicValue.js'
    },
    resolve:{
         mysql2: path.resolve(__dirname, 'node_modules/mysql2'),
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
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    },
    externals: nodeModules
}
