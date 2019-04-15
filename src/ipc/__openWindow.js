/* 打开新窗口 */

//Electron
import {ipcRenderer} from 'electron'

const newWindowObject = document.querySelector('#openNewWindow');
const windowMsg = {
    'contennt': '新窗口内容'
}

newWindowObject.onclick = () => {
    // 通过信道让主进程打开窗口
    ipcRenderer.send('openNewWindow', windowMsg)
    localStorage.setItem('name', 'Gszs') // 储存localStorage
}

ipcRenderer.on('fromNewJs', (event, data) => {
    console.log(data)
}) 