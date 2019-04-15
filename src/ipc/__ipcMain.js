// ipcMain.js

// Electron
import {ipcMain, BrowserWindow} from 'electron'

//Node
import path from 'path'

ipcMain.on('sendMsg', (event, arg) => {
    event.sender.send('sendMsg-reply', 'ok i receive you msg');
})

let win = null;
ipcMain.on('openNewWindow', (event, arg) => {
    let winId = BrowserWindow.getFocusedWindow().id; // 获取当前窗口ID
    win = new BrowserWindow({
        width: 800,
        height: 800,
    })
    // win.loadURL(path.join(__dirname, './ipchtml.html'));
    win.loadURL(path.join(__dirname, '../render/news.html'));
    win.webContents.openDevTools(); // 打开控制台

    // 等待
    win.webContents.on('did-finish-load', () => {
        win.webContents.send('toNews', arg, winId)
    })

    win.on('close', () => {
        win = null
    })
})
