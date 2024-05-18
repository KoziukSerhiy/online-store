const { src } = require("gulp");
const server = require("gulp-server-livereload");

const { PATH } = require("./constants");

const serverConfig = {
  port: 8080,
  livereload: true,
  open: true,
};

/**
 * Function to start the server.
 *
 * @returns {Object} The server instance.
 */
const startServer = () => {
  return src(PATH.dist).pipe(server(serverConfig));
};

exports.server = startServer;
