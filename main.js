const electron = require('electron');
const { app, BrowserWindow, shell } = require('electron');

function createWindow() {
    const menu = electron.Menu;
    menu.setApplicationMenu(null)
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        center: true,
    });
    mainWindow.webContents.on('new-window', function (e, url) {
        e.preventDefault();
        require('electron').shell.openExternal(url);
    })
    // mainWindow.loadURL("http://localhost:3000/");
    mainWindow.loadFile("build/index.html");
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