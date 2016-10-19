var gulp = require('gulp');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uncss = require('gulp-uncss');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var uglify = require('gulp-uglify');
var reload = browserSync.reload;

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
    return gulp.src('src/**/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('dist/')); // tell gulp our output folder
});

gulp.task("webpack", function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.debug = true;

    var devCompiler = webpack(myConfig);
    devCompiler.run(function(err, stats) {
		if (err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('react', function() {
    return gulp.src(['./node_modules/react/dist/react.js', './node_modules/react-router/lib/*.js'])
      .pipe(concat('react.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/'));
});

gulp.task('tachyons', function() {
    return gulp.src('./node_modules/tachyons/css/*.min.css')
      .pipe(concat('tachyons.min.css'))
      //.pipe(uncss({
        //html: ['dist/**/*.html']
      //}))
      .pipe(cssnano())
      .pipe(gulp.dest('./dist/'));
});

gulp.task('jade-watch', ['jade'], reload);
gulp.task('js-watch', ['webpack'], reload);

gulp.task('default', ['react', 'tachyons', 'webpack', 'jade'], function () {
    browserSync({server: './dist'});

    gulp.watch('./src/**/*.*', ['js-watch', 'jade-watch']);
});
