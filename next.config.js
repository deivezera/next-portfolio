
// next.config.js
const path = require('path');
const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  exclude: path.resolve(__dirname, 'assets'),
  webpack(config, options)  {
    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    svgo: false, // Optimization caused bugs with some of my SVGs
                },
            },
        ],
    });
}
})
