// next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
// module.exports = withSass(
//   withCSS({
//     exportTrailingSlash: true,
//   })
// );

module.exports = withBundleAnalyzer(
  withSass(
    withCSS({
      exportTrailingSlash: true,
      // cssModules: true,
      compress: true,
      webpack(config) {
        config.resolve.modules.push(__dirname); // 추가
        return {
          ...config,
          mode:
            process.env.NODE_ENV === "production"
              ? "production"
              : "development",
          devtool:
            process.env.NODE_ENV === "production"
              ? "hidden-source-map"
              : "eval",
          // plugins,
        };
      },
    })
  )
);
