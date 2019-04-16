// clipboard.js
import {clipboard, nativeImage} from 'electron'
import path from 'path'

const msgObj = document.querySelector('#msg'),
      platObj = document.querySelector('#plat'),
      textObj = document.querySelector('#text'),
      copyImgObj = document.querySelector('#copyImg');

msgObj.ondblclick = () => {
    clipboard.writeText(msgObj.innerHTML);
    console.log('向剪贴板总写入内容');
}

// 读取剪贴板内容并写入
platObj.onclick = () => {
    textObj.value = clipboard.readText()
}

// 复制图片到显示页面
copyImgObj.onclick = () => {
    let imgPath = path.join(__dirname, './clipboard/bgimg.png')
    console.log(imgPath);    
    let imagePath = nativeImage.createFromPath(imgPath);
    clipboard.writeImage(imagePath);
    let imgDateUrl = clipboard.readImage().toDataURL() // 转Base64格式

    let imgObj = new Image();
    imgObj.src = imgDateUrl;
    document.querySelector('#showImg').appendChild(imgObj)
}

