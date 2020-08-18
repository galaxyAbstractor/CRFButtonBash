const {app, BrowserWindow, ipcMain} = require('electron');

import Game from "./Game";

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 480,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/../app/index.html`);

    win.setFullScreen(true);

    const game = new Game(win, 18, 17, 27, 22);
}

app.whenReady().then(createWindow);

