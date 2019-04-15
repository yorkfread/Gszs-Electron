// 渲染进程

// electron
import {remote} from 'electron'

// // Node
import path from 'path'

const BrowserWindow = remote.BrowserWindow;
let win = null;
document.querySelector('#newWindow').onclick = () => {
    win = new BrowserWindow({
        width: 300,
        height: 200,
        frame: true,
        fullscreen: false // 是否全屏显示
    })
    win.loadURL(path.join(__dirname, '/render/news.html'));
    win.on('close', () => {win = null})
}





