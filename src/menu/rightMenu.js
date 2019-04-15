// 渲染进程中自定义右键菜单

import {remote} from 'electron'
const rightMenu = remote.Menu

// 菜单项目
let rightmenus = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建文件',
                accelerator: 'ctrl+n', // 绑定快捷键
                click: function () { // 绑定事件
                    console.log('新建文件')
                }
            },
            {
                label: '新建窗口',
                click: function () {
                    console.log('新建窗口')
                }
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '复制',
                role: 'copy' // 调用内置角色实现对应功能
            },
            {
                label: '剪切',
                role: 'cut'  // 调用内置角色实现对应功能
            }
        ]
    },
    {
        label: '视图',
        submenu: [
            {
                label: '浏览'
            },
            {
                label: '搜索'
            }
        ]
    }
]

let rm = rightMenu.buildFromTemplate(rightmenus);

// 绑定右键菜单
window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    rm.popup({
        window: remote.getCurrentWindow() // 获取当前窗口
    })
}, false)