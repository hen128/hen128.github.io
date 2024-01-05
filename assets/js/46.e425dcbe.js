(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{321:function(s,t,a){"use strict";a.r(t);var n=a(10),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"pm2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[s._v("#")]),s._v(" PM2")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cloud.zengweihao.cn/typora/2023-02-07/20230207092045.png",alt:"image-20230207092044016"}})]),s._v(" "),t("blockquote",[t("p",[s._v("pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能")])]),s._v(" "),t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i pm2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("常用命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pm2 start app.js or\npm2 start config.json 启动应用程序\n\npm2 list 列表所有应用程序\n\npm2 logs\npm2 logs xxx 查看日志\n\npm2 stop xxx\npm2 stop all 停止\n\npm2 restart xxx 重启\n\npm2 reload all 热加载允许在不停机的情况下更新应用程序\n\npm2 delete xxx 关闭并删除\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("配置"),t("code",[s._v("创建xxx.json")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"apps"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wuwu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 项目名          ")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./bin/www"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cwd"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根目录")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"args"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 传递给脚本的参数")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"interpreter"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定的脚本解释器")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"interpreter_args"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 传递给解释器的参数")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否监听文件变动然后重启")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignore_watch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不用监听的文件")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exec_mode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster_mode"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 应用启动模式，支持fork和cluster模式")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"instances"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_memory_restart"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大内存限制数，超出自动重启")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error_file"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logs/app-err.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误日志文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"out_file"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logs/app-out.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正常日志文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"merge_logs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置追加日志而不是新建日志")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_date_format"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YYYY-MM-DD HH:mm:ss"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定日志文件的时间格式")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min_uptime"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"60s"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 应用运行少于时间被认为是异常启动")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_restarts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大异常重启次数，即小于min_uptime运行时间重启次数；")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"autorestart"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认为true, 发生异常的情况下自动重启")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cron_restart"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// crontab时间格式重启应用，目前只支持cluster模式;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"restart_delay"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"60s"')]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 异常重启情况下，延时重启时间")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"env"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"NODE_ENV"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境参数，当前指定为生产环境 process.env.NODE_ENV")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"REMOTE_ADDR"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"爱上大声地"')]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// process.env.REMOTE_ADDR")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"env_dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"NODE_ENV"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"development"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境参数，当前指定为开发环境 pm2 start app.js --env_dev")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"REMOTE_ADDR"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"env_test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境参数，当前指定为测试环境 pm2 start app.js --env_test")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"NODE_ENV"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"REMOTE_ADDR"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);