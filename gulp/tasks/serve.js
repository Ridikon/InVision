const gulp = require('gulp');

const styles = require('./styles');

const server = require('browser-sync').create();

module.exports = function serve(cb) {
  server.init({
    server: 'app',
    notify: false,
    open: true,
    cors: true,
  });

  gulp
    .watch('app/scss/**/*.scss', gulp.series(styles))
    .on('change', server.reload);
  gulp.watch('app/index.html').on('change', server.reload);

  return cb();
};
