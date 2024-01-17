const { series, watch, parallel } = require("gulp");

const { PATH } = require("./constants");

const { clean } = require("./clean.task");
const { html } = require("./html.task");
const { styles } = require("./styles.task");
const { assets } = require("./assets.task");
const { server } = require("./server.task");

function watching() {
  watch(`${PATH.src}/**/*.html`, html);
  watch(`${PATH.src}/styles/**/*.scss`, styles);
  watch(`${PATH.src}/assets/**/*`, assets);
}

exports.default = series(
  clean,
  parallel(html, styles, assets),
  parallel(watching, server)
);

exports.build = series(clean, parallel(html, styles, assets));
