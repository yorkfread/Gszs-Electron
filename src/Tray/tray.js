import {Menu, BrowserWindow, app, Tray} from 'electron'
import path from 'path'

// 载入图标位置
const appIcon = new Tray(path.join(__dirname, './favicon.ico'))

let win = new BrowserWindow()

// 创建右键模板
const template = Menu.buildFromTemplate([
    {
        label: '设置',
        click(){}
    },
    {
        label: '关于',
        click(){}
    },
    {
        label: '退出',
        click(){
            app.quit()
        }
    }
])

// 鼠标触碰提示
appIcon.setContextMenu(template)

// 监听点击事件
console.log(win);

appIcon.on('double-click', () => {
    win.show()
})

win.on('close', (e) =>{

    console.log(win.isFocused());
    
    if (!win.isFocused()) {
        win = null;
    } else {
        e.preventDefault();/*阻止应用退出*/
        win.hide();/*隐藏当前窗口*/
    }
})
