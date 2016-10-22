var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uncss = require('gulp-uncss');
var reload = browserSync.reload;

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('dist/')); // tell gulp our output folder
});

gulp.task('tachyons', function() {
    return gulp.src('./node_modules/tachyons*/css/*.min.css')
      .pipe(concat('tachyons.css'))
      //.pipe(uncss({
        //html: ['dist/**/*.html']
      //}))
      .pipe(cssnano())
      .pipe(gulp.dest('./dist/'));
});

gulp.task('jade-watch', ['jade'], reload);

gulp.task('default', ['jade', 'tachyons'], function () {

    browserSync({server: './dist'});

    gulp.watch('./src/templates/**/*.jade', ['jade-watch']);
});
