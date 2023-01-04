module.exports = {
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
  plugins: ['@vuepress/last-updated','@vuepress/back-to-top'],
  themeConfig: {
    nav: require("./nav.js"),// 导航栏
    sidebar: require("./sidebar.js"), // 侧边栏
    collapsable: true,
    // sidebarDepth: 2,
    lastUpdated: "Last Updated",
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
