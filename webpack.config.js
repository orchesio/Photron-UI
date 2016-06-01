module.exports = {

    entry: './src/js/index.js',
    output: {
        filename: 'app.js'
    },
    externals: {
        'react' : 'React'
    }

}