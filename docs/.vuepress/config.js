module.exports = {
  lang: 'zh-CN',
  title: "hen's blog",
  description: "...",
  port: "8080",
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/css/style.css" }],
  ],
  markdown: {
    lineNumbers: true,
  },
  plugins: [[
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow('LLLL')
      }
    }
  ], '@vuepress/back-to-top', '@vuepress/nprogress'],
  themeConfig: {
    nav: require("./nav.js"),// 导航栏
    sidebar: require("./sidebar.js"), // 侧边栏
    collapsable: true,
    // sidebarDepth: 2,
    lastUpdated: "上次更新",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: "更新",
      },
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
  },

};
