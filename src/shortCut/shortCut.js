// 注册全局快捷键
/**
 * !!注意 , 不要在ready事件以前注册快捷键
 */


import {app, globalShortcut} from 'electron'

app.on('ready', () => {
    // 注册
    globalShortcut.register('ctrl+q', () => {
        console.log('注册写入')
    })

    // 检测注册是否成功
    let isRegisterTrue = globalShortcut.isRegistered('ctrl+q');
    console.log('注册是否成功 : ',isRegisterTrue)

    // 退出前注销快捷键
    app.on('will-quit', () => {
        globalShortcut.unregister('ctrl+q')
    })
})