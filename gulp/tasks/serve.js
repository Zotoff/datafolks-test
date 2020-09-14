const gulp = require('gulp')
const pug2html = require('./pug')
const styles = require('./styles')
const scripts = require('./scripts')
const clean = require('./clean')
const server = require('browser-sync').create()


module.exports = function serve(cb) {
	server.init({
		server: 'build',
		notify: false,
		open: true,
		cors: true
	})

	gulp.series(clean)
	gulp.watch('src/styles/*/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
	gulp.watch('src/js/**/*.js', gulp.series(scripts)).on('change', server.reload)
	gulp.watch('src/pages/**/*.pug', gulp.series(pug2html))
	gulp.watch('build/*.html').on('change', server.reload)

	return cb()
}