const { src } = require("gulp");
const server = require("gulp-server-livereload");

const { PATH } = require("./constants");

const serverConfig = {
  port: 8080,
  livereload: true,
  open: true,
};

const startServer = () => {
  return src(PATH.dist).pipe(server(serverConfig));
};

exports.server = startServer;
