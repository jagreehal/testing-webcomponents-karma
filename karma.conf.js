module.exports = function(config) {
  var configuration = {
    //browsers: ["Chrome"],
    browsers: ["ChromeCanaryHeadless"],
    frameworks: ["jasmine"],
    files: [
      "bower_components/webcomponentsjs/webcomponents-lite.js",
      "bower_components/imd/imd.js",
      "components/**/*.*"
    ],
    reporters: ["progress"],
    logLevel: config.LOG_DEBUG
  };

  config.set(configuration);
};
