//  Main gulp
const gulp = require('gulp');

//  Plugins
const uglify = require('gulp-uglify');


//  Default gulp func  run on ">gulp"
gulp.task('default', function(){
	return console.log('Default action');
});

//  Copy static html to dest
gulp.task('copyHtml', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('buildOutput'));
});

//  Minify JS and place file in buildOutput
gulp.task('minifyJS', function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('buildOutput/js'));
});
