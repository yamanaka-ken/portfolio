// config-overrides.js
const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  (config) => {
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000, // Check for changes every second
    };
    config.plugins[0].options.watchContentBase = true;
    return config;
  }
);
