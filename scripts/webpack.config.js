const webpackConfig = require('rc-tools/lib/getWebpackConfig')(true);
const path = require('path');

webpackConfig.entry = {
  'rc-form': path.join(__dirname, './index'),
};

webpackConfig.externals = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom',
  },
};

webpackConfig.output = {
  path: path.join(__dirname, '../dist'),
  filename: '[name].js',
  library: require('../package.json').name,
  libraryTarget: 'umd',
};

module.exports = webpackConfig;
