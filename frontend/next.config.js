// next.config.js
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
module.exports = withSass(
  withCSS({
    exportTrailingSlash: true,
  })
);
