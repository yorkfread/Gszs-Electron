#### 模块 :
---

##### 子进程模块 : 
    remote 模块 - 用于不通过信道的方式调用主进程的模块
    ipcRender 模块 - 与主进程信道进行交互的模块
---

##### 主进程模块 :
    ipcMain 模块 - 与子进程信道进行交互的模块
    Menu 模块 - 菜单模块
    app 模块 - 生命周期模块
    BrowserWindow - Windows窗口模块
    webContents: - 事件发出者,他负责渲染并控制网页,隶属于BrowserWindow对象
    dialog: - dialog系列模块
    Tray: - 系统托盘, 系统托盘右键菜单, 托盘图标闪烁
    global-shortcut: 注册全局快捷键

##### 通用模块 : 
    shell: - 用于与外界交互模块(例如嵌入外部网页,打开外部网页)
    nativeImage: 模块
    clipboard: 模块
    
