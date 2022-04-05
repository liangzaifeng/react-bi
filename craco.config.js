/* craco.config.js */
const CracoLessPlugin = require('craco-less')
// const { loaderByName } = require('@craco/craco')
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      // '@': pathResolve('src'),
      '@assets': pathResolve('src/asserts'),
      '@images': pathResolve('src/asserts/images'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@utils': pathResolve('src/utils'),
      '@src': pathResolve('src'),
      '@pages': pathResolve('src/pages')
      // '@utils': pathResolve('src/utils')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {}
    }
  ]
}
