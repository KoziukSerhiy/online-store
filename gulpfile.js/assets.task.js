const { src, dest } = require("gulp");

const { PATH } = require("./constants");

const assets = () => {
  return src(`${PATH.src}/assets/**/*`).pipe(dest(`${PATH.dist}/assets`));
};

exports.assets = assets;
