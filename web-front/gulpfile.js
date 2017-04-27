const browser = require('browser-sync');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');

gulp.task("browser-sync", function() {
	browser.init({
		server: {
			baseDir: "./public"
		}
	});
});

gulp.task('sass', function() {
	return gulp.src('./src/stylesheet/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./public/stylesheet'))
		.pipe(browser.reload({ stream:true }));
});

gulp.task('watch', function() {
	gulp.watch('./src/stylesheet/*.scss', ['sass']);
});

gulp.task('default', ['browser-sync', 'sass', 'watch']);
