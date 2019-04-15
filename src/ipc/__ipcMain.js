// ipcMain.js

// Electron
import {ipcMain, BrowserWindow} from 'electron'

//Node
import path from 'path'

ipcMain.on('sendMsg', (event, arg) => {
    console.log('渲染进程中发送的消息: ', arg)
    console.log('打印event对象: ', event)
    event.sender.send('sendMsg-reply', 'ok i receive you msg');
})

let win = null;
ipcMain.on('openNewWindow', (event, arg) => {
    win = new BrowserWindow({
        width: 800,
        height: 800,
    })
    // win.loadURL(path.join(__dirname, './ipchtml.html'));
    win.loadURL(path.join(__dirname, '../render/news.html'));
    // win.webContents.openDevTools(); // 打开控制台

    // 等待
    win.webContents.on('did-finish-load', () => {
        win.webContents.send('toNews', arg)
    })

    win.on('close', () => {
        win = null
    })
})
