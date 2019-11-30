const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const postcssCustomProperties = require("postcss-custom-properties");
const postcssNesting = require("postcss-nested");
module.exports = {
  plugins: [
    autoprefixer({
      grid: true
    }),
    postcssPresetEnv({
      stage: 3
    }),
    postcssCustomProperties({
      preserve: true,
      strict: false,
      warning: false
    }),
    postcssNesting
  ]
};
