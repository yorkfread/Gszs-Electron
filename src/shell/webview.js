 import {shell, ipcRenderer} from 'electron'
 const webviewobj = document.querySelector('#webview');

ipcRenderer.on('openwebview', (event, url) => {
    webviewobj.src = url
})