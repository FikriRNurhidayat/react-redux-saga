const theme = require('./src/theme')
const {
  override,
  fixBabelImports,
  addLessLoader,
  useEslintRc,
  addDecoratorsLegacy,
} = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy(),
  useEslintRc('.eslintrc.js'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  })
)
