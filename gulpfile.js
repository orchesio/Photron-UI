var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var paths = {
    scss: './src/scss/*.scss',
    js: ['./src/js/*.js', './src/js/**/*.js']
};

gulp.task('install', function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('watch', function() {

    gulp.watch(paths.scss, ['webpack']);
    gulp.watch(paths.js, ['webpack']);
});

gulp.task("webpack", function(callback) {

      var webpackConfig = Object.create(require('./webpack.config.js'));
 
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var webpackConfig = Object.create(require('./webpack.config.js'));
  
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        historyApiFallback: {
            index: 'index.html'
        },
        contentBase: "./app",
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/index.html");

    });
});

gulp.task('default', ['webpack-dev-server', 'watch']);
