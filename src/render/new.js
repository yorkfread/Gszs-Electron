// localStorage

// let name = localStorage.getItem('name')
// console.log(name)

import {ipcRenderer} from 'electron'
ipcRenderer.on('toNews', (event, arg) => {
    document.querySelector('#getValue').innerHTML = JSON.stringify(arg)
    // console.log('通过webContents触发主进程的send', arg)
})  