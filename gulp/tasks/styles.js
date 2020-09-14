const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpStylelint = require('gulp-stylelint');
const sass = require('gulp-sass')

module.exports = function styles() {
	return gulp.src('src/styles/*.scss')
	.pipe(sass())
	.pipe(shorthand())
	.pipe(sourcemaps.init())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer({
		cascade: false
	}))
	
	.pipe(gulp.dest('build/css'))
}