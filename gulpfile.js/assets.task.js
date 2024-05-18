const { src, dest } = require("gulp");

const { PATH } = require("./constants");

/**
 * The function `assets` copies all files from the source assets directory to the destination assets
 * directory.
 * @returns The `assets` function is returning a stream that reads all files in the `src/assets`
 * directory and pipes them to the `dist/assets` directory.
 */
const assets = () => {
  return src(`${PATH.src}/assets/**/*`).pipe(dest(`${PATH.dist}/assets`));
};

exports.assets = assets;
