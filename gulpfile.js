const gulp = require('gulp');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const serve = require('./gulp/tasks/serve');

const dev = gulp.parallel(
  styles
);

exports.default = gulp.series(clean, dev, serve);
