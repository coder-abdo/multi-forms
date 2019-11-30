module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: true,
      overrideBrowserslist: ["last 10 versions", "ie 6-8", "Firefox > 20"]
    })
  ]
};
