# Vue CLI

## 配置文件

```
// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV == 'development' ? '/' : './',
    devServer: {
        hot: true, //hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览
        open: false, // 使用浏览器自动打开
        https: false,
        port: 8080,
        // proxy: {
        //     // 匹配到/localApi开头时 替换成target指定的地址
        //     '/localApi': {
        //         // 本地
        //         target: process.env.VUE_APP_SRC,
        //         changeOrigin: true, // 开发环境才开启反向代理, 运行(生产)环境不开启
        //         pathRewrite: {
        //             // 把匹配到的/localApi这段开头 替换成 /
        //             '^/localApi': '/'
        //         }
        //     },
        // }
    },

    //  chainWebpack: (config) => {
    //      //配置别名
    //      config.resolve.alias
    //          .set('@', resolve('src'))
    //          .set('assets', resolve('src/assets'))
    //          .set('components', resolve('src/components'))
    //          .set('utils', resolve('src/utils'));
    //  }

    chainWebpack: config => {
        // 发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
            config
                .entry('app')
                .clear()
                .add('./src/main-prd.js')

            config.plugin('html').tap(args => {
                args[0].isProd = true
                args[0].title = "再往后 | 后台管理"
                return args
            })

             // 清除所有console对象的函数
             config.optimization.minimizer('terser').tap((args) => {
                 args[0].terserOptions.compress.drop_console = true
                 return args
             })
        })

        // 开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config
                .entry('app')
                .clear()
                .add('./src/main.js')

            config.plugin('html').tap(args => {
                args[0].isProd = false
                args[0].title = "(dev)再往后 | 后台管理"
                return args
            })
        })
    }
}
```

