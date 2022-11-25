const { app, BrowserWindow } = require('electron');
const electron = require('electron');

function createWindow() {
    const menu = electron.Menu;
    menu.setApplicationMenu(null)
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        center: true,

    });
    win.loadURL('http://localhost:3000/');
}


app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})