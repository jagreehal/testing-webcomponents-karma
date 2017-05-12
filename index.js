const browserSync = require("browser-sync").create();
browserSync.init({
  server: ".",
  files: ["components/**/*.*"],
  notify: false,
  open: false
});
