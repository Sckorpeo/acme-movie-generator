module.exports = {
    entry: './client/index.js',
    output: {
        filename: './build/bundle.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
};
