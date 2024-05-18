const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourceMaps = require("gulp-sourcemaps");
const mode = require("gulp-mode")();
const plumber = require("gulp-plumber");

const { PATH } = require("./constants");

const sassConfig = {
  outputStyle: "compressed",
};

/**
 * The 'styles' function compiles SCSS files into CSS, applies autoprefixer, and generates source maps.
 *
 * @returns {Object} A Gulp stream that compiles SCSS files into CSS and applies autoprefixer.
 */
const styles = () => {
  return src(`${PATH.src}/styles/*.scss`)
    .pipe(plumber())
    .pipe(mode.development(sourceMaps.init()))
    .pipe(sass(sassConfig).on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 version"],
        cascade: false,
      })
    )
    .pipe(mode.development(sourceMaps.write(".")))
    .pipe(plumber.stop())
    .pipe(dest(PATH.dist));
};

exports.styles = styles;
