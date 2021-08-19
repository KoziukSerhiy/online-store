const { src, dest, series, watch, parallel } = require('gulp');
const connect = require('gulp-connect');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));;
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  src: __dirname + '/src/',
  dist: __dirname + '/dist/'
};

function connectServer(cb) {
  connect.server({
    port: 8080,
    root: paths.dist,
    livereload: true
  });

  cb();
}

function clean() {
  return del(paths.dist + '**', { fors: true });
}

function html() {
  return src(paths.src + 'index.html')
    .pipe(connect.reload())
    .pipe(dest('./dist'));
}

function styles() {
  return src(paths.src + 'styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: [
        'last 2 version'
      ],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(connect.reload())
    .pipe(dest('./dist'));
}

function assets() {
  return src(paths.src + 'assets/**/*')
    .pipe(connect.reload())
    .pipe(dest('./dist/assets'));
}

function watching(cb) {
  watch('src/index.html', html);
  watch('src/**/*.scss', styles);
  watch('src/assets/**/*', assets);

  cb();
}

const gulpTasks = [clean, html, styles, assets];

exports.build = series(...gulpTasks);
exports.default = series(
  ...gulpTasks,
  parallel(connectServer, watching)
);