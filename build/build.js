(function() {

  'use strict';

  const gulp = require('gulp');
  const config = require('./config');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('build', ['clean'], function() {
    return gulp.src('src/*.scss')
      .pipe( gulp.dest('dist'))
      .pipe( $.rename('index.wxss'))
      .pipe( gulp.dest('dist'));
  });

}());
