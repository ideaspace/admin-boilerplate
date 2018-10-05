const path = require('path')
const fs = require('fs')
module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .options({
        raw: true
      })
  },
  devServer: {
    setup: (app) => {
      app.get('*.yaml', (req, res) => {
        const yaml = require('js-yaml')
        try {
          const data = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'src', req.url), 'utf8').replace(/\$fa-var-/g, ''))
          res.json({
            data: Object.keys(data).map(v => {
              return {
                name: v,
                copy: false
              }
            })
          })
        } catch (e) {
          res.json(e)
        }
      })
    },
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    public: '',
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/_variables.scss";`
      }
    }
  }
}
