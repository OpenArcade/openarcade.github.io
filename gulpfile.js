var gulp = require('gulp');
var browserify = require('browserify');
var literalify = require('literalify');
var b = browserify();

var config = {
	scripts: {
		src: '_scripts/',
		dest: 'js/'
	}
};

gulp.task('scripts', function() {
	b.transform(literalify.configure({
		'jquery': 'window.$'
	}));
	b.add(config.scripts.src+'app.js');
	b.bundle().pipe(require('fs').createWriteStream(config.scripts.dest+'app.js'));
});

gulp.task('scripts:watch', function() {
	gulp.watch(config.scripts.src+'*.js', ['scripts']);
});

gulp.task('watch', ['scripts:watch']);