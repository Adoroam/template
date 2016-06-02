'use strict'; //make sure it's right
/* REQUIRE GULP MODULES */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var server = require('gulp-express');
var del = require('del');
//concat javascript and minify to dist/all.min.js
gulp.task('js', function() {
    return gulp.src(['src/index/app.module.js', 'src/**/*ctrl.js', 'src/**/*.js'])
    .pipe(babel())
    .pipe(concat('all.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('dist'));
});
//processes sass into css
gulp.task('sass', function () {
    return gulp.src('src/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src'));
});
gulp.task('css', ['sass'], function(){
    gulp.src('src/base.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
    return del(['src/**/*.css']);
});
gulp.task('templates', function() {
    gulp.src('src/**/*.html')
    .pipe(flatten())
    .pipe(gulp.dest('dist/templates'));
});
//run server on localhost and enable automatic refresh
gulp.task('server', function(){
    server.run(['server.js']);
});
//the default task runs the compilers and starts the server
gulp.task('default', ['js', 'css', 'templates', 'server']);
//DEV TASKS
//the dev task does the same as the default except it watches the folders for changes
gulp.task('dev',['default'], function() {
    gulp.watch(['src/**/*.js'], ['js']);
    gulp.watch(['src/base.scss', 'src/**/*.scss'], ['css']);
    gulp.watch(['dist/index.html', 'src/**/*.html'], ['templates']);
});

/*
if you have an error somewhere, you can use
this error handler to find what's wrong just add
.on('error', errorHandler)
to broken piece and uncomment the function below
/*
function errorHandler (error) {
  console.log(error.toString()); this.emit('end');};
*/
