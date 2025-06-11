module.exports = function override(config, env) {
  // Modify the output configuration
  config.output = {
    ...config.output,
    filename: "static/js/bundle.js",
    chunkFilename: "static/js/bundle.js",
  };

  // Disable code splitting
  config.optimization = {
    ...config.optimization,
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
    runtimeChunk: false,
  };

  return config;
};
