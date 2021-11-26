module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    },
    devServer: {
        static: {
            directory: `${__dirname}/dist`
        },
        port: 8080,
        open: true
    }
}