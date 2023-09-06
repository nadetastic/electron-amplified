const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

const { Amplify, Auth } = require('aws-amplify');
const awsExports = require('./src/aws-exports');
Amplify.configure(awsExports)


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.openDevTools();
  win.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('currentUser', async (event) => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user);
            return 'Current user is ' + user.username;
        } catch(e){
            console.error(e)
            return e;
        }
    })

    ipcMain.handle('login', async (event,data) => {
        console.log(data)
        try {
            const user = await Auth.signIn(data.username,data.password);
            console.log(user)
        } catch(e){
            console.error(e)
        }
    })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})