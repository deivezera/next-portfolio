const withImages = require('next-images')
module.exports = withImages()
module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig)
}
