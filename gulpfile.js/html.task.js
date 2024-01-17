const { src, dest } = require("gulp");
const fileInclude = require("gulp-file-include");
const plumber = require("gulp-plumber");

const { PATH } = require("./constants");

const fileIncludeConfig = {
  prefix: "@@",
  basepath: "@file",
};

const html = () => {
  return src(`${PATH.src}/*.html`)
    .pipe(plumber())
    .pipe(fileInclude(fileIncludeConfig))
    .pipe(plumber.stop())
    .pipe(dest(PATH.dist));
};

exports.html = html;
