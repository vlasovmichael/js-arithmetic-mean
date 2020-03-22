'use strict';

var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
  nunjucksRender = require('gulp-nunjucks-render'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  notify = require('gulp-notify'),
  fileinclude = require('gulp-file-include'),
  rigger = require('gulp-rigger'),
  mainBowerFiles = require('gulp-main-bower-files'),
	spritesmith = require('gulp.spritesmith'),
  svgSprite = require("gulp-svg-sprites"),
  clean = require('gulp-clean'),
  sourcemaps = require('gulp-sourcemaps')

// server connect
gulp.task('connect', function() {
	connect.server({
		root: 'build',
		livereload: true
	});
});

// Image Task
gulp.task('img', function(){
  gulp.src('src/img/**/*')
  // .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
  .pipe(gulp.dest('build/img'))
  .pipe(connect.reload());
}); 

// sass
gulp.task('sass', function () {
  var processors = [
    autoprefixer({browsers: ['last 10 versions'], cascade: false}),
  ];
  return gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError)) // nested, expanded, compact, compressed
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

// bower main files
gulp.task('main-bower-files', function() {
    return gulp.src('bower_components/jquery/dist/jquery.min.js')
      // .pipe(mainBowerFiles([[filter, ]options][, callback]))
      .pipe(gulp.dest('src/js'));
});

// html
gulp.task('html', function () {
  gulp.src('src/*.html')
  .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
  }))
  .pipe(nunjucksRender({
    path: 'src'
  }))
  .pipe(gulp.dest('build/'))
  .pipe(connect.reload());
});

// js
gulp.task('js', function () {
  gulp.src('src/js/*.js')
  // .pipe(rigger())
  .pipe(gulp.dest('build/js'))
  .pipe(connect.reload());
});

// spritesmith
gulp.task('spritesmith', function () {
  var spriteData = gulp.src('src/img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath:'../img/sprite.png',
    algorithm: 'diagonal',
    padding: 10
  }));
   // Pipe image stream through image optimizer and onto disk 
  var imgStream = spriteData.img
    .pipe(gulp.dest('src/img')).pipe(connect.reload());
 
  // Pipe CSS stream through CSS optimizer and onto disk 
  var cssStream = spriteData.css
    .pipe(gulp.dest('src/sass')).pipe(connect.reload());
});

// svg sprites
gulp.task('svgSprite', function () {
    return gulp.src('src/img/svg/*.svg')
      .pipe(svgSprite({
          mode: "symbols",
          preview: false,
          svg: {
              symbols : "sprite.svg"
          }
      }))
      .pipe(gulp.dest("src/img"))
      .pipe(connect.reload());
});

// fonts
gulp.task('fonts', function() {
  gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('build/fonts'))
  .pipe(connect.reload());
});

// clean
gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

// watch
gulp.task('watch', function () {
  gulp.watch('src/img/**/*', ['img'])
  gulp.watch('src/img/sprite/*', ['spritesmith'])
  gulp.watch('src/fonts/**/*', ['fonts'])
	gulp.watch('src/*.html', ['html'])
  gulp.watch('src/layouts/*.html', ['html'])
  gulp.watch('src/img/svg/*.svg', ['svgSprite'])
	gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/sass/**/*.scss', ['sass'])
  gulp.watch('src/bower_components/jquery/dist/jquery.min.js', ['main-bower-files'])
})

// default
gulp.task('default', ['connect', 'html', 'sass', 'js', 'img', 'spritesmith', 'svgSprite', 'fonts', 'watch']);