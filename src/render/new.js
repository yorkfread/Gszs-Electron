// localStorage

// let name = localStorage.getItem('name')
// console.log(name)

import {ipcRenderer, remote} from 'electron'
const BrowserWindow = remote.BrowserWindow;
ipcRenderer.on('toNews', (event, arg, winId) => {
    let receiveWindow = BrowserWindow.fromId(winId); // 获取ID窗口
    receiveWindow.webContents.send('fromNewJs', '来自new.js的反馈');
    document.querySelector('#getValue').innerHTML = JSON.stringify(arg);
})