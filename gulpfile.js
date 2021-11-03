const { dest, src, series, watch: gulpWatch } = require("gulp");
const browserSync = require("browser-sync");
const postcss = require("gulp-postcss");
const server = browserSync.create();

function css() {
  return src("./global.css").pipe(postcss()).pipe(dest("./static"));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    proxy: "localhost:8000",
  });
  done();
}

const watch = () => {
  gulpWatch("./**/*.twig", series(css, reload));
  gulpWatch("./**/*.php", series(css, reload));
  gulpWatch("./global.css", series(css, reload));
  gulpWatch("./tailwind.config.js", series(css, reload));
};

exports.default = series(css, serve, watch);
exports.build = css;