// dialog

import {remote} from 'electron'

const msgObj = document.querySelector('#showMsg'),
      warningObj = document.querySelector('#showWarning')

msgObj.onclick = () => {
    remote.dialog.show
}