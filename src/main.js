// Electron
import { app, BrowserWindow } from 'electron';
require('./shortCut/shortCut.js')  // 注册快捷键

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  // 创建一个主浏览器窗口
  require('./ipc/__ipcMain')  // 信道
  require('./shell/menu.js')  // 配合webview + shell + menu
  require('./Tray/tray.js')   // 图标 
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // 加载html页面
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // 打开控制台
  mainWindow.webContents.openDevTools();

  // 窗口关闭时触发
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// 监听全部窗口关闭
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 处理ox系统
app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
