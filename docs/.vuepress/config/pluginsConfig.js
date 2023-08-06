module.exports = [
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow('LLLL')
      }
    }
  ],
  ['@vuepress/back-to-top'],
  ['@vuepress/nprogress'],
  ["vuepress-plugin-auto-sidebar", {
    // options
    sidebarDepth: 2
  }]
]