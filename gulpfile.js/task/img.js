const img = () => {
  return $.gulp.src($.path.img.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'IMAGES',
        message: error.message
      }))
    }))
    .pipe($.gp.newer($.path.img.dest))
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.gulp.src($.path.img.src))
    .pipe($.gp.newer($.path.img.dest))
    .pipe($.gp.if($.app.isProd, $.gp.imagemin({
      verbose: true,
    })))
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.browserSync.stream());
}


module.exports = img;