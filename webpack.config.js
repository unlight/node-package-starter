const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        lib: `${__dirname}/src/index.tsx`,
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: 'source-map-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: { transpileOnly: true },
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader', options: { minimize: false } },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: `${__dirname}/dist`,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: `${__dirname}/examples/index.html`,
            filename: 'index.html',
        }),
    ]
}
