module.exports = [
    ['@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).fromNow()
            }
        }],
    ['@vuepress/back-to-top'],
    ['@vuepress/nprogress']
]