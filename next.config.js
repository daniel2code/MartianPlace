const path = require('path');

const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})

module.exports = {
  // reactStrictMode: true,
  sassOptions : {
    includePaths : [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['ipfs.infura.io'],
  }
}

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}