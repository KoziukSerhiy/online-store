const { src } = require("gulp");
const fs = require("fs");
const gulpClean = require("gulp-clean");

const { PATH } = require("./constants");

/**
 * Cleans the specified directory by deleting all files and subdirectories.
 *
 * @param {function} cb - The callback function to be executed after the cleaning is complete.
 * @returns {object} - A Gulp stream object representing the cleaning process.
 */
const clean = (cb) => {
  if (fs.existsSync(PATH.dist)) {
    return src(PATH.dist, { read: false }).pipe(gulpClean({ force: true }));
  }

  cb();
};

exports.clean = clean;
