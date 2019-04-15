// shell.js

 import {shell} from 'electron'
 const shellObj = document.querySelector('#shellDom');

 shellObj.onclick = () => {
     shell.openExternal('http://www.baidu.com');
 }