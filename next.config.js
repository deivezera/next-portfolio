
// next.config.js
const path = require('path');
const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  exclude: path.resolve(__dirname, 'assets'),
  webpack(config, options) {
    return config
  }
})
