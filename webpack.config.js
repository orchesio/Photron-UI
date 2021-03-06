var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080')
    };

    return sources;
}

module.exports = {

    entry: {
        PhotronUI: getEntrySources(['./src/js/index.js'])
    },
    output: {
        path: path.join(__dirname, "/app/js/"),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            },
            {
                test: /.scss?$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/photron-ui.css', {
            allChunks: true
        })
    ]

}