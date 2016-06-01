var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
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

    gulp.watch(paths.scss, ['scss']);
    gulp.watch(paths.js, ['scripts']);
});

gulp.task('scss', function(done) {

    gulp.src('./src/scss/*.scss')
        .pipe(concat('proton-ui.scss'))
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(rename({extname: '.css'}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('app/css'))
        .on('end', done);

});

gulp.task('scripts', function(done) {

    gulp.src('./src/js/index.js')
        .pipe(webpack(require('./webpack.config.js') ))
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(gulp.dest('./app/js'))
        .on('end', done);

});

gulp.task('default', ['scss', 'scripts', 'watch']);
