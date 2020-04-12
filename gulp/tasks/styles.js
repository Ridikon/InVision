const gulp = require('gulp');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

module.exports = function styles() {
  return gulp
    .src('app/scss/styles.scss')
    .pipe(scss())
    .pipe(autoprefixer({cascade: false}))
    .pipe(
      cleanCSS(
        { debug: true, compatibility: '*' },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'));
};
