const path                  =   require('path')
const CleanWebpackPlugin    =   require('clean-webpack-plugin')
const HtmlWebpackPlugin     =   require('html-webpack-plugin')
const ExtractTextPlugin     =   require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:[path.resolve(__dirname,"node_modules")],
                loader: "babel-loader",
                options: { presets: ["env","react"] }
            },
            {
                test: /\.css?$/,
                exclude: [path.resolve(__dirname,"node_modules")],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("js/style.css"),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './public/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}