const { resolve } = require("path");

module.exports = {
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        illustration: resolve(__dirname, "svgtest.html"),
      },
    },
  },
};
