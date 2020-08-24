module.exports = {
  assetsDir: 'assets',
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          // We want to keep the vendors chunk, but we don't want to include moment since it's relatively large
          // and only used for the screenshots page (which is never served to the client).
          // An alternative method would be to set minChunks to 2 here.
          vendors: {
            test: /[\\/]node_modules[\\/](?!(moment|moment-timezone)[\\/])/
          },
          // The common chunk doesn't really make sense here since the only reason we're splitting
          // pages is for the server-side screenshots page. Disabling it to save an HTTP request.
          common: false
        }
      }
    },
    plugins: [],
  },
  // Disabling this for now due to issues with the modern build
  // chainWebpack: config => {
  //   config.plugin('prefetch-index').tap(options => {
  //     options[0].fileBlacklist = options[0].fileBlacklist || [];
  //     options[0].fileBlacklist.push(/lang-.+?\.js$/);
  //     return options;
  //   });
  // },

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(args => {
        args.compilerOptions.whitespace = 'preserve'
      })
  },
  devServer: {
    contentBase: [
      './public',
      './dist'
    ]
  },
  pages: {
    index: {
      entry: 'src/web/main.js'
    },
    screenshots: {
      entry: 'src/web/screenshots.js'
    }
  }
}
