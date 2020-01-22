var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var watch = require('gulp-watch');
var rigger = require('gulp-rigger');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var rimraf = require('rimraf');
var reload = browserSync.reload;
var postcss = require('gulp-postcss');
var rebaseUrls = require('gulp-css-url-rebase');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var gcmq = require('gulp-group-css-media-queries');
let cleanCSS = require('gulp-clean-css');

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    // svg: 'build/svg',
    // video: 'build/video',
    // fonts: 'build/fonts',
    // audio: 'build/audio'
  },
  src: {
    html: 'src/*html',
    js: [
      'src/assets/js/jquery-3.3.1.min.js',
      'src/assets/js/slick.min.js',
      'src/assets/js/wow.min.js',
      'src/js/script.js'
      // '//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick.min.js',
    ],
    style: [
      'src/assets/css/*.css',
      'src/sass/*.sass'
    ],
    img: [
      'src/img/*.jpg',
      'src/img/*.png'
    ],
    // svg: [
    //   'src/svg/*.svg'
    // ],
    // video: [
    //  'src/video/*.mp4'
    // ],
    // fonts: [
    //  'src/fonts/*.ttf',
    //  'src/fonts/*.otf'
    // ],
    // audio: [
    //  'src/audio/*.mp3'
    // ]
  },
  watch: {
    html: 'src/*.html',
    js: 'src/js/**/*.js',
    style: 'src/sass/*.sass'
  },
  clean: './build'
}



gulp.task('html:build', function() {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('js:build', function() {
  return gulp.src(path.src.js)
    // .pipe(rigger())

    .pipe(concat('script.js'))
    .pipe(minify())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('style:build', function() {
  gulp.src(path.src.style)
    .pipe(sass().on('error', sass.logError)).pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
    // .pipe(rebaseUrls())
    // .pipe(minify())
    // .pipe(preFixer())

    .pipe(concat('style.css'))
    .pipe(gcmq())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({
      stream: true
    }));
});


gulp.task('img:build', function() {
  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({
      stream: true
    }));
});

// gulp.task('svg:build', function() {
//   gulp.src(path.src.svg)
//     .pipe(gulp.dest(path.build.svg));
// });

// gulp.task('video:build', function(){
//  gulp.src(path.src.video)
//      .pipe(gulp.dest(path.build.video));
// });

// gulp.task('audio:build', function(){
//  gulp.src(path.src.audio)
//      .pipe(gulp.dest(path.build.audio));
// });

// gulp.task('fonts:build', function(){
//  gulp.src(path.src.fonts)
//      .pipe(gulp.dest(path.build.fonts));
// });



// gulp.task('scripts', function(){
//  return gulp.src(path.src.js)
//     .pipe(concat('script.js'))
//     .pipe(minify())
//      .pipe(gulp.dest('build/js'));
// });


gulp.task('build', [
  'html:build',
  'js:build',
  'style:build',
  'img:build'
  // 'svg:build',
  // 'video:build',
  // 'fonts:build',
  // 'scripts'
]);

gulp.task('watch', function() {
  watch([path.watch.js], function(ev, callback) {
    gulp.start('js:build');
  });
  watch([path.watch.html], function(ev, callback) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(ev, callback) {
    gulp.start('style:build');
  });
});

//web-server
gulp.task("webserver", function() {
  browserSync({
    server: {
      baseDir: "./build"
    },
    host: 'localhost',
    port: 8080,
  });
});

////clean build
gulp.task('clean', function(callback) {
  rimraf(path.clean, callback);
});


gulp.task('default', ['build', 'webserver', 'watch']);