var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');

// process JS files and return the stream.
gulp.task('js', function () {
    
    return gulp.src(['./js/jquery-3.2.1.min.js',
                      './js/app.js'])
        .pipe(concat({ path: 'all.min.js'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});




gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./dist/css'));
});


// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// create a task that ensures the `css` task is complete before
// reloading browsers
gulp.task('css-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['js','sass'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
    gulp.watch("sass/*.scss", ['css-watch']);
});