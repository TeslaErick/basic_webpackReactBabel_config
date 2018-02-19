const merge = require('webpack-merge')
const common = require('./webpack.common.js')

/**
 * hello
 */

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});