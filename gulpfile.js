//  Main gulp
const gulp = require('gulp');

/**
 *  gulp plugins
 */

//  Uglify, used to minify
const uglify = require('gulp-uglify');

//  concar, used to concat multiple files into one file
const concat = require('gulp-concat');

/**
 *  Functions
 */


//  Default gulp func  run on ">gulp"
gulp.task('default', ['copyHTML', 'concatAndMinifyJS']);

//  Copy static html to dest
gulp.task('copyHTML', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('buildOutput'));
});

//  Minify JS and place file in buildOutput
gulp.task('minifyJS', function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('buildOutput/js'));
});

//  Concat and minify js files
gulp.task('concatAndMinifyJS', function(){
	gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('buildOutput/js'));
});

//  Watch, automatically run functions when file change
gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['concatAndMinifyJS']);
	gulp.watch('src/*.html', ['concatAndMinifyJS']);
});



