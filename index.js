const electron = require('electron');
const defaultMenu = require('electron-default-menu');

const {
  app,
  BrowserWindow,
  Menu,
  shell
} = electron;

let win;
let player;
let willQuitApp = false;

const start = () => {
  win = new BrowserWindow({
    width: 1136,
    height: 640,
    resizable: true,
    title: 'CODEPEN',
    maximizable: true,
    titleBarStyle: 'hidden-inset',
    icon: `file://${__dirname}/Icon.icns`
  });

  win.loadURL('file://' + __dirname + '/index.html');

  win.webContents.on('did-finish-load', () => {
    // win.webContents.openDevTools();
    let menu = defaultMenu(app, shell);

    Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
  }); // end did-finish-load

  win.on('close', (e) => {
    if (willQuitApp) {
      // the user tried to quit the app
      player = null
      win = null;
    } else {
      // the user only tried to close the win
      e.preventDefault();
      win.hide();
    }
  });

  win.on('restore', (e) => {
    e.preventDefault();
    win.show();
  });
}; // end start

app.on('activate', () => win.show());
app.on('before-quit', () => willQuitApp = true);
app.on('ready', start);
