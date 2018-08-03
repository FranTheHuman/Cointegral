const path = require('path');
module.exports = {
    entry: './src/Client/index.js',
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/
            }
            // {
            //   use: ['style-loader', 'css-loader'],
            //   test: /\.css$/
            // },
        ]
    }
}