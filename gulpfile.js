'use strict'; //make sure it's right
/* REQUIRE GULP MODULES */
var gulp = require('gulp'); 
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var server = require('gulp-express');
//concat javascript and minify to dist/all.min.js
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('dist'));
});
//processes sass into css
gulp.task('sass', function () {
    return gulp.src('src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});
//concats all css and moves to dist/style.css
gulp.task('css', function() {
    return gulp.src('src/css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));    
});
//run server on localhost and enable automatic refresh
gulp.task('server', function(){
    server.run(['server.js']);
});
//the default task runs the compilers and starts the server
gulp.task('default', ['js', 'sass', 'css', 'server']);
//DEV TASKS
gulp.task('devserver', function(){
    server.run(['server.js']);
    gulp.watch(['dist/index.html', 'dist/templates/*', 'src/**/*'], ['js', 'sass', 'css']);
});
//the dev task does the same as the default except it watches the folders for changes
gulp.task('dev', ['js', 'sass', 'css', 'devserver']);
/*
if you have an error somewhere, you can use
this error handler to find what's wrong just add 
.on('error', errorHandler) 
to broken piece and uncomment the function below
/*
function errorHandler (error) {
  console.log(error.toString()); this.emit('end');};
*/