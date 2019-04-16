// 消息通知

const notificationObj = document.querySelector('#showNotification')
import path from 'path'


let options = {
    title: '消息通知',
    body: '内容',
    icon: path.join(__dirname, '../Tray/favicon.ico') // 图标
}

notificationObj.onclick = () => {
    let Gszs_Notification = new window.Notification(options.title, options);
}

Gszs_Notification.onclick = () => {
    console.log('关闭')
}
