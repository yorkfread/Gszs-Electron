// ipcRender.js

import {ipcRenderer} from 'electron'

const ipcRenderObject = document.querySelector('#ipcRender');
const message = {
    name: 'Gszs',
    age: 100
}

ipcRenderObject.onclick = () => {
    // 异步发送
    ipcRenderer.send('sendMsg', message)
}

// 监听主进程的广播
ipcRenderer.on('sendMsg-reply', (event, data) => {
    console.log('主进程的回馈信息 :', data)
    document.querySelector('#receiveRender').innerHTML = data
})
