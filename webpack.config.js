module.exports = {
    entry: './src/main.ts', 
    output: {
        filename: './dist/easyEditor.js',
        libraryTarget: 'var',
        library: 'easyEditor'
    },
    module: {
        loaders:[
            {
                test: /\.html$/, 
                exclude: /node_modules/,
                use: {loader: 'html-loader'}
            },
            {
                test: /\.ts$/, 
                use: {loader: 'ts-loader'}
            }
        ]
    },
    resolve: {
      extensions: [".js", ".ts", ".html", ".css"]
    }
}