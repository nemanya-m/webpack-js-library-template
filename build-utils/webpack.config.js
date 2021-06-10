const { default: merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = (env) => {
  const envConfig = require(`./webpack.${env.dev ? 'dev' : 'prod'}`);
  return merge(commonConfig, envConfig);
}