
var gulp = require('gulp');
var gulpLiveScript = require('gulp-livescript');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
});

gulp.task('ls', function() {
	return gulp.src('./test/*.ls')
		.pipe(gulpLiveScript({bare: true}))
		.pipe(gulp.dest('./test'));
});

gulp.task('test', function() {
	return gulp.src('./test/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});