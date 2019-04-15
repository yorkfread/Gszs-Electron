// 打开dialog窗口

import {remote} from 'electron'
import path from 'path'

let __BrowserWindow = remote.BrowserWindow;

let __win = null;
document.querySelector('#showDialog').onclick = () => {
    __win = new __BrowserWindow({
        width: 800,
        height: 800,
    })
    __win.loadURL(path.join(__dirname, './dialog/dialog.html'))
    __win.on('close', () => {
        __win = null
    })
}