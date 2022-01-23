const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/js', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                include: /src/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
}