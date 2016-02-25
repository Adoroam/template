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
    return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(concat('all.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('dist'));
});
//processes sass into css
gulp.task('sass', function () {
    //move files to modules/sass
    gulp.src('src/**/*.scss')
    .pipe(flatten())
    .pipe(gulp.dest('src/sass'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/sass'));
    //concat css and move to dist
});
gulp.task('css', function(){
    gulp.src('src/sass/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
    return del(['src/sass/*ss']);
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
gulp.task('default', ['js', 'sass', 'css', 'templates', 'server']);
//DEV TASKS
//the dev task does the same as the default except it watches the folders for changes
gulp.task('dev', function() {
    server.run(['server.js']);
    gulp.watch(['src/**/*.js'], ['js', 'server']);
    gulp.watch(['src/*/*.scss', '!src/sass/*.scss'], ['sass', 'server']);
    gulp.watch(['src/sass/*.css'], ['css', 'server']);
    gulp.watch(['dist/index.html', 'src/**/*.html'], ['templates', 'server']);
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
