const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImgCompress = require('nice-img-compress');
const {whenDev, whenProd, when} = require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    configure: (webpackConfig, {env, paths}) => {
      // 禁止生成LICENSE文件
      webpackConfig.optimization.minimizer = whenProd(() => {
        return webpackConfig.optimization.minimizer.map((plugin) => {
          if (plugin instanceof TerserPlugin) {
            plugin.options.extractComments = false;
          }
          return plugin;
        })
      }, webpackConfig.optimization.minimizer);
      console.log(webpackConfig);
      /*
      // 去除因hash而改变的文件名
      webpackConfig.output = whenProd(() => {
        for (let key in webpackConfig.output) {
          let flag = ['filename', 'chunkFilename', 'assetModuleFilename'].includes(key);

          flag && (webpackConfig.output[key] = webpackConfig.output[key].replace('.[contenthash:8]', ''))

          flag = ['assetModuleFilename'].includes(key);
          flag && (webpackConfig.output[key] = webpackConfig.output[key].replace('.[hash]', ''))
        }
        return webpackConfig.output;
      }, webpackConfig.output);
      webpackConfig.plugins = whenProd(() => {
        return webpackConfig.plugins.map((plugin) => {
          if (plugin instanceof MiniCssExtractPlugin) {
            plugin = new MiniCssExtractPlugin({
              filename: 'static/css/[name].css',
              chunkFilename: 'static/css/[name].chunk.css',
            });
          }
          return plugin;
        })
      }, webpackConfig.plugins);
      webpackConfig.module.rules = whenProd(() => {
        return webpackConfig.module.rules.map((rule) => {
          if (rule?.oneOf) {
            rule?.oneOf.map((item) => {
              if (String(item.test) === String(/\.svg$/)) {
                item.use[1].options.name = 'static/media/[name].[ext]'
              }
              return item;
            })
          }
          return rule;
        })
      }, webpackConfig.module.rules)
      */

      webpackConfig.plugins = whenProd(() => {
        return [
          ...webpackConfig.plugins,
          new ImgCompress()
        ]
      }, webpackConfig.plugins)

      return webpackConfig
    },
  }
}
