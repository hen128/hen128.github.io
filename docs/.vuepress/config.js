module.exports = {
  lang: 'zh-CN',
  title: "hen's blog", // hen's blog
  description: "...",
  port: "8080",
  head: require("./config/headConfig.js"),
  markdown: {
    lineNumbers: true,
  },
  plugins: require("./config/pluginsConfig.js"),
  themeConfig: {
    nav: require("./config/navConfig.js"),// 导航栏
    // sidebar: require("./config/sidebarConfig.js"), // 侧边栏
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
