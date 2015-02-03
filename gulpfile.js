/**
 * Created by dong on 2014/12/31.
 */


var gulp = require("gulp");
var less = require('gulp-less');
var gutil = require('gulp-util');
var notifier = require('node-notifier');
var path = require('path');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

gulp.task('less', function () {

  return gulp.src('./public/app/style/less/**/*.less')
    .pipe(less())
    .on('error', function (error) {
      gutil.log(gutil.colors.red(error.message))
      notifier.notify({
        title: 'Less compilation error',
        message: error.message
      })
    })
    .pipe(gulp.dest('./public/app/style/dist/'));

});
gulp.task('less2', function () {

  return gulp.src('./app/style/dependence/**/*.less')
    .pipe(less())
    .on('error', function (error) {
      gutil.log(gutil.colors.red(error.message))
      notifier.notify({
        title: 'Less compilation error',
        message: error.message
      })
    })
    .pipe(gulp.dest('./app/style/dist/'));

});

gulp.task('minifyCss', function () {

  return gulp.src('./app/style/dest/**.*.css')
    .pipe(minifyCSS())
    .on('error', function (error) {
      gutil.log(gutil.colors.red(error.message))
      notifier.notify({
        title: 'Less compilation error',
        message: error.message
      })
    })
    .pipe(gulp.dest('./app/style/dist/'));
});
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html',["less"], function () {
  gulp.src('**/*.*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./public/app/style/less/**/*.less'], ['less']);
});
gulp.task('default', ['connect', 'watch']);