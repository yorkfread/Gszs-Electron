// webview + shell + menu

import {shell, Menu, BrowserWindow, remote} from 'electron'

// 当前窗口打开网页
const openWebView = (url) => {
    let win = BrowserWindow.getFocusedWindow();
    win.webContents.send('openwebview', url);
}

// 在窗口外打开网页
const openWeb = (url) => {
    shell.openExternal(url)
}

// 菜单模板
let template = [
    {
        label: '帮助',
        submenu: [
            {
                label: '关于我们',
                click: function () {
                    openWeb('http://blog.poetries.top')
                }
            },
            {
                type: 'separator'
            },
            {
                label: '联系我们',
                click: function () {
                    openWeb('https://github.com/poetries')
                }
            }
        ]
    },
   {
        label: '加载网页',
        submenu: [
            {
                label: '博客',
                click: function () {
                    openWebView('http://blog.poetries.top')
                }
            },
            {
                type: 'separator' // 分隔符
            },
            {
                label: 'GitHub',
                click: function () {
                    openWebView('https://github.com/poetries')
                }
            },
            {
                type: 'separator' // 分隔符
            },
            {
                label: '简书',
                click: function () {
                    openWebView('https://www.jianshu.com/users/94077fcddfc0/timeline')
                }
            }
        ]
   },
   {
    label: '视频网站',
    submenu: [
        {
            label: '优酷',
            click: function () {
                openWebView('https://www.youku.com')
            }
        },
        {
            type: 'separator' // 分隔符
        },
        {
            label: '爱奇艺',
            click: function () {
                openWebView('https://www.iqiyi.com/')
            }
        },
        {
            type: 'separator' // 分隔符
        },
        {
            label: '腾讯视频',
            click: function () {
                openWebView('https://v.qq.com/')
            }
        }
    ]
    }
]

let m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)