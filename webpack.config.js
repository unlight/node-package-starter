const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = async (options) => ({
    entry: {
        lib: `${__dirname}/src/index.ts`,
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: 'source-map-loader',
            },
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'ts-loader',
            //         options: { transpileOnly: true },
            //     }
            // },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'swc-loader',
                    options: require(`${__dirname}/.swcrc`),
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
    devServer: {
        contentBase: `${__dirname}/dist`,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: `${__dirname}/examples/index.html`,
            filename: 'index.html',
        }),
    ]
});
