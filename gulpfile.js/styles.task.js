const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourceMaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");

const { PATH } = require("./constants");

const sassConfig = {
  outputStyle: "compressed",
};

const styles = () => {
  return src(`${PATH.src}/styles/*.scss`)
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass(sassConfig).on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 version"],
        cascade: false,
      })
    )
    .pipe(sourceMaps.write("."))
    .pipe(plumber.stop())
    .pipe(dest(PATH.dist));
};

exports.styles = styles;
