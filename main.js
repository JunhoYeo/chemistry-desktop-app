const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
let win

function createWindow () {
    win = new BrowserWindow({
        width: 1025, height: 628,
        resizable: false,
        fullscreen: false
    });
    win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.on('closed', () => {
        win = null
    })
}
  
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
  
app.on('activate', () => {
    if (win === null) createWindow()
})
