const { src } = require("gulp");
const fs = require("fs");
const gulpClean = require("gulp-clean");

const { PATH } = require("./constants");

const clean = (cb) => {
  if (fs.existsSync(PATH.dist)) {
    return src(PATH.dist, { read: false }).pipe(gulpClean({ force: true }));
  }

  cb();
};

exports.clean = clean;
