// 网络变化

import path from 'path'

window.addEventListener('online', () => {
    console.log('断开网络,正在进行重新连接');
})

// 断开配置
let newWorkOfflineOptions = {
    title: '标题',
    body: '内容',
    icon: path.join(__dirname, '../Tray/favicon.ico')
}

window.addEventListener('offline', () => {
    const Gszs_Notification = new window.Notification(newWorkOfflineOptions.title, newWorkOfflineOptions);
    Gszs_Notification.onclick = () => {
        console.log('触发提示框')
    }
})